"use client";

import { Button, Input } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { signIn, authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function LoginPage() {

const handleLogin = async (
  e: React.FormEvent<HTMLFormElement>,
): Promise<void> => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await signIn.email({
    email,
    password,
    callbackURL: "/",
  });

  if (error) {
    toast.error("Login Failed!");
    return;
  }
};



  const handleGoogleLogin = async (): Promise<void> => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-[80vh] flex flex-col bg-slate-50 py-8">
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="text-center space-y-2 relative">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Login
              </h2>
              <p className="text-slate-500 font-medium">
                Continue your journey today
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onPress={handleGoogleLogin}
                
                className="w-full py-5 font-bold rounded-xl bg-[#D7CCC8] hover:text-[#ffffff] hover:bg-[#ad8d7d] text-[#4E342E] transition-colors gap-3"
              >
                <FcGoogle size="20rem" /> Sign in with Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100"></span>
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">
                  Or with email
                </span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Email Address
                </label>

                <Input
                  id="email"
                  required
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Password
                </label>

                <Input
                  id="password"
                  required
                  placeholder="••••••••"
                  type="password"
                  name="password"
                  className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                />
              </div>

              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm font-bold text-[#4E342E] hover:underline underline-offset-4 transition-all"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full btn rounded-xl bg-[#D7CCC8] hover:text-[#ffffff] hover:bg-[#ad8d7d] text-[#4E342E] h-15 text-lg font-black shadow-xl group"
              >
                Sign In{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="text-center pt-2">
              <p className="text-sm text-slate-500 font-medium">
                New to CourseHub?{" "}
                <Link
                  href="/register"
                  className="text-[#4E342E] font-black hover:underline underline-offset-4 transition-all"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

