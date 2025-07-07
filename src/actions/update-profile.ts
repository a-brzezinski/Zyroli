"use server";

import { State } from "@/@types/store";
import { requireSession } from "@/lib/auth/require-session";
import prisma from "@/lib/prisma";

interface ActionResponse {
  status: "success" | "error";
  message: string;
}

export type PayloadState = Omit<State, "profile" | "original"> & {
  profileVisible: boolean;
  profile: Omit<State["profile"], "avatar"> & {
    avatar: string;
  };
};
export const updateProfile = async (userId: string, payload: PayloadState): Promise<ActionResponse> => {
  try {
    const session = await requireSession();
    if (!session || session.user.id !== userId) {
      return {
        status: "error",
        message: "Unauthorized access.",
      };
    }

    const {
      backgroundColor,
      profile: { avatar, heading, subheading, bio, links },
    } = payload;

    const existingProfile = await prisma.profile.findUnique({
      where: { userId },
      include: { links: true },
    });

    if (!existingProfile) {
      await prisma.profile.create({
        data: {
          profileVisible: payload.profileVisible,
          backgroundColor,
          headingText: heading.text,
          headingColor: heading.color,
          subheadingText: subheading.text,
          subheadingColor: subheading.color,
          bioText: bio.text,
          bioColor: bio.color,
          avatar,
          user: { connect: { id: userId } },
          links: {
            create: links.map(link => ({
              url: link.url,
              icon: link.icon,
              label: link.label,
              iconColor: link.iconColor,
              isVisible: link.isVisible,
            })),
          },
        },
      });
    } else {
      await prisma.profile.update({
        where: { id: existingProfile.id },
        data: {
          profileVisible: payload.profileVisible,
          backgroundColor,
          headingText: heading.text,
          headingColor: heading.color,
          subheadingText: subheading.text,
          subheadingColor: subheading.color,
          bioText: bio.text,
          bioColor: bio.color,
          avatar,
          links: {
            deleteMany: {},
            create: links.map(link => ({
              url: link.url,
              icon: link.icon,
              label: link.label,
              iconColor: link.iconColor,
              isVisible: link.isVisible,
            })),
          },
        },
      });
    }

    return {
      status: "success",
      message: "Profile updated successfully.",
    };
  } catch (error) {
    console.error("updateProfile error:", error);
    return {
      status: "error",
      message: "An error occurred while updating the profile.",
    };
  }
};
