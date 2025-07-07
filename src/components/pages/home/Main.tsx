import Image from "next/image";
import Link from "next/link";

export const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="max-w-2xl text-4xl font-bold text-gray-800 sm:text-5xl">
        Create a beautiful and customizable <span className="text-indigo-600">BIO link</span> in minutes
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-600">
        Share all your important links in one place. Perfect for creators, freelancers, and small businesses.
      </p>
      <Link
        href="/editor"
        className="mt-8 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700">
        Get Started – It&apos;s Free
      </Link>

      <div className="mt-12 w-full max-w-3xl">
        <Image
          src="/preview.png"
          alt="Live preview example"
          width={1200}
          height={800}
          className="rounded-xl shadow-lg"
        />
      </div>
    </main>
  );
};
