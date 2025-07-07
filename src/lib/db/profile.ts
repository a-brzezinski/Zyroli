import "server-only";

import prisma from "../prisma";

export const getUserProfile = async (userId: string) => {
  return await prisma.profile.findFirst({
    where: { userId },
    include: {
      links: true,
    },
  });
};
