import AcmeLogo from "@/app/ui/acme-logo";
import RegisterForm from "@/app/ui/register-form";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account",
};

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center my-12 md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <RegisterForm />
        </Suspense>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
