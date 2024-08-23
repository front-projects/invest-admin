"use server";

import { Deposit } from "@/components/Deposits/types";
// import axios from "axios";
import {
  FetchUsersProps,
  FetchUsersResponse,
  Lottery,
  TopUsers,
} from "@/components/Users/types";
import { Withdraw } from "@/components/Withdraw/types";
import axios from "axios";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getUsers = async (
  fetch: FetchUsersProps
): Promise<FetchUsersResponse | undefined> => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(
      API_URL + `users?size=${fetch.pageSize}&page=${fetch.page}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const getUser = async (id: string | number) => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(API_URL + `users/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    return undefined;
  }
};

function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Проміс виконано через 2 секунди");
    }, 1500);
  });
}

export const getUserByLogin = async (login: string | number) => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(API_URL + `users/login/${login}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const getDeposits = async (): Promise<Deposit[] | undefined> => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(API_URL + `deposits`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const getWithdraw = async (): Promise<Withdraw[] | undefined> => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(API_URL + `withdraws`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const withdrawStatusUpdate = async (
  obj: Withdraw
): Promise<boolean | undefined> => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.put(API_URL + `withdraws/${obj.id}`, obj, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const createTransaction = async (transaction: any, userId: any) => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.post(
      API_URL + `incomes/add/${userId}`,
      transaction,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};


export const randomLottery = async (obj: any) => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.post(API_URL + `incomes/generate/count`, obj, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    return false;
  }
};