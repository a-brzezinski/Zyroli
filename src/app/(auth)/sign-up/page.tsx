import SignUp from "@/components/forms/auth/SignUpForm";
import { AuthLayout } from "@/components/layouts/AuthLayout";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Welcome to Zyroli!"
      description="Create your account and start building your personal bio page."
    >
      <SignUp />
    </AuthLayout>
  );
}
