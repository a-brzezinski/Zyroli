import Image from "next/image";
import { redirect } from "next/navigation";

import { requireSession } from "@/lib/auth/require-session";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const AuthLayout = async ({
  children,
  description,
  title,
}: AuthLayoutProps) => {
  const session = await requireSession();
  if (session) {
    redirect("/editor");
  }

  return (
    <div className="flex flex-col md:flex-row w-full md:h-screen bg-gray-50 ">
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-500 to-purple-900 text-white flex-col justify-center items-center p-12">
        <Image
          alt="Zyroli Icon"
          src="/icon.png"
          width={80}
          height={80}
          className="mb-6"
        />
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-lg text-white/90 text-center max-w-md">
          {description}
        </p>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 h-full">
        <div className="w-full max-w-[600px]">{children}</div>
      </div>
    </div>
  );
};
