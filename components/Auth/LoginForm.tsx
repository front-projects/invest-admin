"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/app/auth/actions";
import Button from "../ui/Button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const { pending } = useFormStatus();
  const container = useRef(null);
  const [state, action] = useFormState(login, undefined);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.fromTo(
        ".login-form",
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.inOut", duration: 1 }
      );
    },
    { scope: container }
  );
  if (state?.message == "redirect") {
    router.push("/menu");
  }

  return (
    <form
      action={action}
      className="w-max max-sm:pb-36 items-center flex justify-center"
      ref={container}
    >
      <div className="flex flex-col items-center gap-4 p-16 bg-gray-600/10 rounded-xl login-form max-sm:w-[100%]">
        <h1 className="text-2xl font-bold p-4">LOGIN</h1>
        <input
          id="email"
          name="email"
          placeholder="login"
          type="text"
          // className={state?.errors?.email && !pending ? "border-red-500" : ""}
        />
        {state?.errors?.email && !pending && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          // className={
          //   state?.errors?.password && !pending ? "border-red-500" : ""
          // }
        />
        {state?.errors?.password && !pending && (
          <p className="text-sm text-red-500">{state.errors.password}</p>
        )}
        {state?.message && state?.message !== "redirect" && !pending && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <LoginButton />
      </div>
    </form>
  );
}

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="mt-4 w-full">
      {pending ? "Submitting..." : "Log In"}
    </Button>
  );
}
