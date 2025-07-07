import SignInForm from "@/components/forms/auth/SignInForm";
import { AuthLayout } from "@/components/layouts/AuthLayout";

export default function SignInPage() {
  return (
    <AuthLayout
      title="Welcome back to Zyroli!"
      description="Log in to edit your bio and manage your profile."
    >
      <SignInForm />
    </AuthLayout>
  );
}
