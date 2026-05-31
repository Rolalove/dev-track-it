"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const OnboardingOne = ({
  onNext,
}: {
  onNext: (data: Record<string, unknown>) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: Record<string, unknown>) => {
    console.log("Form Submitted:", data);
    onNext(data);
  };

  return (
    <div className="w-full max-w-md p-4 space-y-4">
      <SectionHeader
        title="Let's Set You Up"
        subtitle=""
        className="!text-left"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
              className="py-5.5 border-marketing-muted placeholder:text-marketing-muted"
            />
            {errors.firstName && (
              <p className="text-xs text-red-500">
                {errors.firstName.message as string}
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <Input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
              className="py-5.5 border-marketing-muted placeholder:text-marketing-muted"
            />
            {errors.lastName && (
              <p className="text-xs text-red-500">
                {errors.lastName.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <Input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="py-5.5 border-marketing-muted placeholder:text-marketing-muted"
          />
          {errors.email && (
            <p className="text-xs text-red-500">
              {errors.email.message as string}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className="py-5.5 border-marketing-muted placeholder:text-marketing-muted"
          />
          {errors.password && (
            <p className="text-xs text-red-500">
              {errors.password.message as string}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-5.5 bg-marketing-primary text-card rounded-xl font-semibold transition-all"
        >
          Continue
        </Button>
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-marketing-muted"></div>
          <span className="text-sm text-marketing-muted font-medium">or</span>
          <div className="h-px flex-1 bg-marketing-muted"></div>
        </div>

        {/* Google Sign in */}
        <Button
          type="submit"
          className="w-full py-5.5 bg-transparent border border-marketing-muted text-marketing-muted rounded-xl font-semibold"
        >
          <Image
            src="/assets/icons/flat-color-icons_google.svg"
            alt="google icon"
            width={20}
            height={20}
            className="pr-1"
          />
          Continue with Google
        </Button>

        {/* Sign In Link */}
        <p className="font-medium text-sm ">
          Already have an account?{" "}
          <Link href="" className="font-semibold underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};
