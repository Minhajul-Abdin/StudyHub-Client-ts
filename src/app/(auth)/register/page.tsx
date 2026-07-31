"use client";

import { Button, Input } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { signUp, authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const nameValue = formData.get("name");
    const emailValue = formData.get("email");
    const passwordValue = formData.get("password");
    const imageValue = formData.get("image");

    if (
      typeof nameValue !== "string" ||
      typeof emailValue !== "string" ||
      typeof passwordValue !== "string"
    ) {
      toast.error("Invalid form data");
      return;
    }

    const validationError = validatePassword(passwordValue);

    if (validationError) {
      return;
    }

    const registrationData = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      image: typeof imageValue === "string" ? imageValue : "",
    };

    const { data, error } = await signUp.email(registrationData);

    if (error) {
      toast.error("Registration Failed!");
      return;
    }

    router.push("/");
  };

  const validatePassword = (password: string): string => {
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return "Password must be at least 6 characters long.";
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return "Password must contain at least one uppercase letter.";
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return "Password must contain at least one lowercase letter.";
    }

    return "";
  };

  const handleGoogleLogin = async (): Promise<void> => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-[80vh] flex flex-col bg-slate-50 py-8">
      <div className="grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="text-center space-y-2 relative">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Join{" "}
                <span>
                  Study<i>Nook</i>
                </span>
              </h2>

              <p className="text-slate-500 font-medium">
                Create your account to start exploring
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleRegister}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Full Name
                </label>

                <Input
                  id="name"
                  required
                  placeholder="Enter your name"
                  name="name"
                  className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                />
              </div>

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
                  htmlFor="image"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Profile Image URL
                </label>

                <Input
                  id="image"
                  placeholder="https://images.unsplash.com/..."
                  type="url"
                  name="image"
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

              <Button
                
                type="submit"
                className="w-full btn rounded-xl bg-[#D7CCC8] hover:text-[#ffffff] hover:bg-[#ad8d7d] text-[#4E342E] h-14 text-lg font-black group"
              >
                Create Account{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="space-y-4">
              <Button
                onPress={handleGoogleLogin}
                
                className="w-full py-5 font-bold rounded-xl bg-[#D7CCC8] hover:text-[#ffffff] hover:bg-[#ad8d7d] text-[#4E342E] transition-colors gap-3"
              >
                <FcGoogle size="20rem" /> Sign in with Google
              </Button>
            </div>

            <div className="text-center pt-2">
              <p className="text-sm text-slate-500 font-medium">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#4E342E] font-black hover:underline underline-offset-4 transition-all"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

