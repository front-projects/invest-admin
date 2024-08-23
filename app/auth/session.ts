import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

// export async function createSession(token: string) {
//   const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

//   cookies().set("token", token, {
//     httpOnly: true,
//     secure: true,
//     expires: expiresAt,
//     sameSite: "lax",
//     path: "/",
//   });
//   redirect("/menu");
// }
export async function createSession(accessToken: string) {
  const accessExpiresAt = new Date(Date.now() + 5 * 60 * 60 * 1000); // 5 годин
  // const refreshExpiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 днів

  cookies().set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    expires: accessExpiresAt,
    sameSite: "lax",
    path: "/",
  });

  // cookies().set("refreshToken", refreshToken, {
  //   httpOnly: true,
  //   secure: true,
  //   expires: refreshExpiresAt,
  //   sameSite: "lax",
  //   path: "/",
  // });

  // redirect("/menu/lottery");
}

// async function refreshAccessToken() {
//   const refreshToken = cookies().get("refreshToken")?.value;
//   if (!refreshToken) {
//     redirect("/login");
//   }

//   // Надсилаємо запит на сервер для оновлення access token
//   const response = await fetch("/api/refresh-token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ refreshToken }),
//   });

//   if (!response.ok) {
//     redirect("/login");
//   }

//   const { accessToken } = await response.json();
//   const accessExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 хвилин

//   cookies().set("accessToken", accessToken, {
//     httpOnly: true,
//     secure: true,
//     expires: accessExpiresAt,
//     sameSite: "lax",
//     path: "/",
//   });

//   return accessToken;
// }

// export async function verifySession() {
//   const token = cookies().get("token")?.value;
//   if (!token) {
//     redirect("/login");
//   }
//   return token;
// }

export async function verifySession() {
  let accessToken = cookies().get("accessToken")?.value;

  // if (!accessToken) {
  //   accessToken = await refreshAccessToken();
  // }

  // Додаткова логіка перевірки access token
  // Наприклад, розшифрування та перевірка терміну дії

  return accessToken;
}
export function deleteSession() {
  cookies().delete("accessToken");
  // cookies().delete("refreshToken");
  redirect("/login");
}

// export function deleteSession() {
//   cookies().delete("token");
//   redirect("/login");
// }
