import { NextResponse } from "next/server";

import { Link, Profile } from "@/generated/prisma";
import { requireSession } from "@/lib/auth/require-session";
import { getUserProfile } from "@/lib/db/profile";

type ProfileWithLinks = Profile & {
  links: Link[];
};

export type GetProfileResponse = {
  profile: ProfileWithLinks | null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (_: Request) => {
  try {
    const session = await requireSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const profileData = await getUserProfile(userId);

    return NextResponse.json<GetProfileResponse>({
      profile: profileData || null,
    });
  } catch (error) {
    console.error("GET /api/profile error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
