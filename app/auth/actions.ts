"use server";
import { FormState } from "./types";
import { createSession, deleteSession } from "./session";
import axios from "axios";

// FOR TEST
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toBase64(str: any) {
  return Buffer.from(str, "utf-8").toString("base64");
}

export async function login(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email && !email?.includes("@")) {
    return { errors: { email: ["Please enter a valid email"] } };
  }
  if (!password) {
    return { errors: { password: ["Please enter your password"] } };
  }

  const authHeader = "Basic " + toBase64(`${email}:${password}`);
  try {
    const response = await axios.post(
      API_URL + "auth/token",
      {},
      {
        headers: {
          Authorization: authHeader,
        },
      }
    );
    if (response.data) {
      await createSession(response.data.accessToken);
      return { message: "redirect" };
    } else if (!response.data) {
      return { message: "Incorrect password or login" };
    }
  } catch (error) {
    return { message: "Incorrect password or login" };
  }
}

export async function logout() {
  deleteSession();
}
