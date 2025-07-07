"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/auth/auth-client";
import { SignUpSchema, signUpSchema } from "@/lib/schemas/auth";

export default function SignUpForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const handleSubmit = async (data: SignUpSchema) => {
    setError(null);
    await signUp.email(
      {
        email: data.email,
        password: data.password,
        name: data.username,
      },
      {
        onSuccess: () => {
          router.push("/sign-in");
          toast.success("Account created successfully!");
        },
        onError: ({ error }) => {
          setError(error.message);
          if (error.status === 422) {
            setError("Username or email already exists.");
          }
          toast.error("Failed to create account: " + error.message);
        },
      }
    );
  };

  return (
    <Card className="w-full md:max-w-[600px]">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign Up</CardTitle>
        <CardDescription className="text-xs md:text-sm">Enter your information to create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. janedoe" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be part of your public profile URL and <strong>cannot be changed later</strong>: <br />
                    <code>
                      yourdomain.com/<strong>username</strong>
                    </code>
                    <br />
                    Must be <strong>unique</strong>.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. jane@example.com" {...field} />
                  </FormControl>
                  <FormDescription>We&apos;ll never share your email with anyone else.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a secure password" type="password" {...field} />
                  </FormControl>
                  <FormDescription>Must be at least 8 characters.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Create Account"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        {error && <p className="mb-2 text-sm text-red-500">{error}</p>}
        <div>
          <p className="text-sm text-gray-500">
            Already have an account?
            <Link href="/sign-in" className="ml-1 text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
