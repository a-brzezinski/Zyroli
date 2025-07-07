import Image from "next/image";
import Link from "next/link";

import { LogoutButton } from "@/components/common/LogoutButton";
import { Button } from "@/components/ui/button";
import { requireSession } from "@/lib/auth/require-session";

export const Header = async () => {
  const session = await requireSession();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <nav className="flex items-center space-x-2">
        <Image src="/icon.png" width={30} height={30} alt="icon" />
        <p className="text-xl font-semibold text-gray-800">Zyroli</p>
      </nav>
      {session ? (
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href="/editor">Editor</Link>
          </Button>
          <LogoutButton variant="outline" />
        </div>
      ) : (
        <Button asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      )}
    </header>
  );
};
