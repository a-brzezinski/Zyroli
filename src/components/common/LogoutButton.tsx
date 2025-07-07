"use client";

import type { VariantProps } from "class-variance-authority";
import { useRouter } from "next/navigation";

import { Button, buttonVariants } from "@/components/ui/button";
import { signOut } from "@/lib/auth/auth-client";

export const LogoutButton = ({
  variant,
}: VariantProps<typeof buttonVariants>) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
      },
    });
  };

  return (
    <Button variant={variant} onClick={handleLogout}>
      Logout
    </Button>
  );
};
