"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icons/logo.svg";

// Define your validation schema using Zod
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white  rounded-lg shadow-lg p-10 w-full max-w-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-14 w-auto"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                {...register("email")}
                type="email"
                autoComplete="email"
                required
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                  errors.email ? "ring-red-600" : "focus:ring-green-600"
                } sm:text-sm sm:leading-6`}
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1">
                  Invalid email address
                </p>
              )}
            </div>
          </div>
          {/* Password field */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  href="#"
                  className="font-semibold text-orange-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                {...register("password")}
                type="password"
                autoComplete="current-password"
                required
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                  errors.password ? "ring-red-600" : "focus:ring-green-600"
                } sm:text-sm sm:leading-6`}
              />
              {errors.password && (
                <p className="text-red-600 text-xs mt-1">
                  Password must be at least 6 characters long
                </p>
              )}
            </div>
          </div>
          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
