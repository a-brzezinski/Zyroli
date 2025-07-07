import { isEqual } from "lodash";
import { useTransition } from "react";
import { toast } from "sonner";

import { PayloadState, updateProfile } from "@/actions/update-profile";
import { uploadAvatar } from "@/helpers/upload-avatar";
import { useSession } from "@/lib/auth/auth-client";
import useEditorStore from "@/lib/store/editorStore";
import useErrorStore from "@/lib/store/errorStore";

import { Button } from "../ui/button";

export const UpdateProfileButton = () => {
  const session = useSession();
  const [isPending, startTransition] = useTransition();
  const user = session.data?.user;

  const backgroundColor = useEditorStore(state => state.backgroundColor);
  const profileVisible = useEditorStore(state => state.profileVisible);
  const profile = useEditorStore(state => state.profile);
  const original = useEditorStore(state => state.original);

  const hasError = useErrorStore(state => state.hasError());

  const handleUpdateProfile = () => {
    if (!user) {
      console.error("User is not authenticated");
      return;
    }

    startTransition(async () => {
      const avatarUrl: string =
        typeof profile.avatar === "string" ? profile.avatar : await uploadAvatar(profile.avatar);

      const payload: PayloadState = {
        backgroundColor,
        profileVisible,
        profile: {
          heading: profile.heading,
          subheading: profile.subheading,
          bio: profile.bio,
          links: profile.links,
          avatar: avatarUrl,
        },
      };

      if (original && isEqual(payload, original)) {
        return;
      }

      const response = await updateProfile(user.id, payload);

      if (response.status === "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message || "Update failed");
      }
    });
  };

  const isDisabled =
    isPending ||
    hasError ||
    (useEditorStore.getState().original !== null &&
      isEqual(
        {
          backgroundColor,
          profileVisible,
          profile,
        },
        useEditorStore.getState().original!
      ));

  return (
    <Button onClick={handleUpdateProfile} className="mt-2" variant="secondary" disabled={isDisabled}>
      {isPending ? "Updating..." : "Update Profile"}
    </Button>
  );
};
