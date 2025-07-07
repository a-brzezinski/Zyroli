"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { EditPanel } from "@/components/features/editor/EditPanel";
import { LivePreview } from "@/components/features/preview/LivePreview";
import { EditPanelSkeleton } from "@/components/skeletons/EditPanelSkeleton";
import { LivePreviewSkeleton } from "@/components/skeletons/LivePreviewSkeleton";
import { MobileFallback } from "@/components/skeletons/MobileFallback";
import useEditorStore from "@/lib/store/editorStore";

import { GetProfileResponse } from "../api/profile/route";

export default function Editor() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initState = useEditorStore(state => state.initState);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/profile");
        if (!response.ok) {
          toast.error("Failed to fetch profile data");
          throw new Error("Failed to fetch profile data");
        }

        const { profile } = (await response.json()) as GetProfileResponse;

        if (profile === null) {
          initState({});
        } else {
          initState({
            profileVisible: true,
            backgroundColor: "#ffffff",
            profile: {
              heading: {
                text: profile.headingText,
                color: profile.headingColor,
              },
              subheading: {
                text: profile.subheadingText,
                color: profile.subheadingColor,
              },
              avatar: profile.avatar || "",
              bio: {
                text: profile.bioText,
                color: profile.bioColor,
              },
              links: profile.links.map(link => ({
                url: link.url,
                icon: link.icon,
                label: link.label,
                isVisible: link.isVisible,
                iconColor: link.iconColor,
              })),
            },
          });
        }
      } catch (error) {
        console.error("Error during profile download", error);
        initState({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [initState]);

  if (!isDesktop) return <MobileFallback />;

  return (
    <section className="flex min-h-screen p-4">
      <div className="mx-auto flex w-full max-w-[1400px] gap-2">
        <div className="w-2/5 rounded-2xl border-r bg-gradient-to-b from-[#8a60f0] to-[#5248e3] p-4 shadow-xl">
          {isLoading ? <EditPanelSkeleton /> : <EditPanel />}
        </div>
        <div className="w-3/5 rounded-2xl bg-white p-4 shadow-2xl">
          {isLoading ? <LivePreviewSkeleton /> : <LivePreview />}
        </div>
      </div>
    </section>
  );
}
