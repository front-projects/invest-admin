// "use server";

// import { Deposit } from "@/components/Deposits/types";
// // import axios from "axios";
// import {
//   FetchUsersProps,
//   FetchUsersResponse,
//   Lottery,
//   TopUsers,
//   UpdatedUser,
// } from "@/components/Users/types";
// import { Withdraw } from "@/components/Withdraw/types";

// // export const getUsers = async (
// //   fetch: FetchUsersProps
// // ): Promise<FetchUsersResponse> => {
// //   const URL = process.env.NEXT_PUBLIC_API_URL;
// //   try {
// //     const response = await axios.get(URL + "/api/users");
// //   } catch {
// //     throw new Error("Error fetching data");
// //   }
// //   return {
// //     users: [
// //       { id: 1, name: "Vlad", email: "Test" },
// //       { id: 2, name: "Vlad", email: "Test" },
// //       { id: 3, name: "Vlad", email: "Test" },
// //     ],
// //     totalUsers: 100,
// //   };
// // };

// export const getUsers = async (
//   fetch: FetchUsersProps
// ): Promise<FetchUsersResponse> => {
//   if (fetch.page == 1) {
//     return {
//       users: [
//         {
//           id: 12345,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12346123333,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12343215,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12312345444444433333,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12312334533333333333333,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12343123123522222222222222222,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 123132345111111111111,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 1213233451412412,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12123123345111111111111111,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 123321345999999999,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12312334588888888,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12333123345777777777,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12331245666666666666,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 123312312345555555555,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 1233123454444444444444,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 123213123345333333333333,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 123123123452222222,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12312312334511111123,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 123312314533333333123,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//         {
//           id: 12331231233453123123,
//           login: "user123",
//           name: "John Doe",
//           username: "johndoe",
//           upperReferralLogin: "referrer123",
//           role: "ADMIN",
//           createdAt: "2024-07-31T12:34:56",
//         },
//       ],
//       totalUsers: 100,
//     };
//   }
//   return {
//     users: [
//       {
//         id: 12345,
//         login: "user123",
//         name: "John Doe",
//         username: "johndoe",
//         upperReferralLogin: "referrer123",
//         role: "ADMIN",
//         createdAt: "2024-07-31T12:34:56",
//       },
//     ],
//     totalUsers: 100,
//   };
// };

// export const getUser = async (id: string | number) => {
//   if (id == 12345) {
//     return {
//       id: 3,
//       login: "u1",
//       name: "Name Test1",
//       username: "u1",
//       reflink: null,
//       balanceAmount: 100,
//       investModels: [
//         {
//           id: 11,
//           naming: "Private",
//           priceAmount: 10,
//           trendingStatus: "MEDIUM",
//           partnerBonusAmount: 0,
//           mainBonusAmount: 0,
//           lostRefIncomeAmount: 0,
//           totalPrizeAmount: 0,
//           investModelStatus: "BOUGHT",
//           investModelLevel: "LEVEL_1",
//           unlockDate: null,
//           createdAt: "2024-07-24T17:58:46.874446",
//         },
//         {
//           id: 12,
//           naming: "Lvl 1",
//           priceAmount: 200,
//           trendingStatus: "MEDIUM",
//           partnerBonusAmount: 0,
//           mainBonusAmount: 0,
//           lostRefIncomeAmount: 0,
//           totalPrizeAmount: 0,
//           investModelStatus: "LOCKED",
//           investModelLevel: "LEVEL_2",
//           unlockDate: null,
//           createdAt: "2024-07-24T17:58:46.98856",
//         },
//         {
//           id: 13,
//           naming: "Lvl 2",
//           priceAmount: 170,
//           trendingStatus: "MEDIUM",
//           partnerBonusAmount: 0,
//           mainBonusAmount: 0,
//           lostRefIncomeAmount: 0,
//           totalPrizeAmount: 0,
//           investModelStatus: "LOCKED",
//           investModelLevel: "LEVEL_3",
//           unlockDate: null,
//           createdAt: "2024-07-24T17:58:47.106525",
//         },
//         {
//           id: 14,
//           naming: "Lvl 3",
//           priceAmount: 130,
//           trendingStatus: "MEDIUM",
//           partnerBonusAmount: 0,
//           mainBonusAmount: 110,
//           lostRefIncomeAmount: 0,
//           totalPrizeAmount: 11000,
//           investModelStatus: "LOCKED",
//           investModelLevel: "LEVEL_4",
//           unlockDate: null,
//           createdAt: "2024-07-24T17:58:47.21934",
//         },
//         {
//           id: 15,
//           naming: "Lvl 4",
//           priceAmount: 110,
//           trendingStatus: "MEDIUM",
//           partnerBonusAmount: 0,
//           mainBonusAmount: 0,
//           lostRefIncomeAmount: 0,
//           totalPrizeAmount: 0,
//           investModelStatus: "LOCKED",
//           investModelLevel: "LEVEL_5",
//           unlockDate: null,
//           createdAt: "2024-07-24T17:58:47.346111",
//         },
//       ],
//       transactions: [
//         {
//           transactionAmount: 0.01,
//           description: "Encouraging bonus",
//           transactionType: "PURCHASE",
//           incomeType: "ADMIN",
//           createdAt: "2024-07-24T17:58:47.836026",
//         },
//         {
//           transactionAmount: 0.01,
//           description: "Encouraging bonus",
//           transactionType: "DEPOSIT",
//           incomeType: "ADMIN",
//           createdAt: "2024-07-24T17:58:47.836026",
//         },
//         {
//           transactionAmount: 0.01,
//           description: "Encouraging bonus",
//           transactionType: "INCOME",
//           incomeType: "ADMIN",
//           createdAt: "2024-07-24T17:58:47.836026",
//         },
//         {
//           transactionAmount: 0.01,
//           description: "Encouraging bonus",
//           transactionType: "INCOME",
//           incomeType: "ADMIN",
//           createdAt: "2024-07-24T17:58:47.836026",
//         },
//         {
//           transactionAmount: 0.01,
//           description: "Encouraging bonus",
//           transactionType: "INCOME",
//           incomeType: "ADMIN",
//           createdAt: "2024-07-24T17:58:47.836026",
//         },
//         {
//           transactionAmount: 0.01,
//           description: "Encouraging bonus",
//           transactionType: "INCOME",
//           incomeType: "ADMIN",
//           createdAt: "2024-07-24T17:58:47.836026",
//         },
//       ],
//     };
//   }
// };

// function delayedPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Проміс виконано через 2 секунди");
//     }, 1500);
//   });
// }

// export const getTopUsers = async (): Promise<TopUsers[]> => {
//   await delayedPromise();
//   return [
//     {
//       id: 1,
//       name: "marko200",
//       username: "glendale",
//       investedAmount: 168.56,
//       earnedAmount: 2517.23,
//       createdAt: "2024-07-24T18:27:09.648736",
//     },
//     {
//       id: 2,
//       name: "s_i_m_is",
//       username: "harrogate",
//       investedAmount: 141.34,
//       earnedAmount: 2312.48,
//       createdAt: "2024-07-24T18:27:09.817368",
//     },
//     {
//       id: 3,
//       name: "Cortland",
//       username: "linton",
//       investedAmount: 123.9,
//       earnedAmount: 2125.87,
//       createdAt: "2024-07-24T18:27:09.951701",
//     },
//     {
//       id: 4,
//       name: "danny_samo",
//       username: "orchard",
//       investedAmount: 107.53,
//       earnedAmount: 1911.66,
//       createdAt: "2024-07-24T18:27:10.065779",
//     },
//     {
//       id: 5,
//       name: "joshua__",
//       username: "quintrell",
//       investedAmount: 93.12,
//       earnedAmount: 1719.22,
//       createdAt: "2024-07-24T18:27:10.183415",
//     },
//     {
//       id: 6,
//       name: "semoni",
//       username: "ridgemont",
//       investedAmount: 76.87,
//       earnedAmount: 1513.45,
//       createdAt: "2024-07-24T18:27:10.38343",
//     },
//     {
//       id: 7,
//       name: "laoc0020",
//       username: "sterling",
//       investedAmount: 61.43,
//       earnedAmount: 1331.19,
//       createdAt: "2024-07-24T18:27:10.502126",
//     },
//     {
//       id: 8,
//       name: "cryptopros",
//       username: "thurston",
//       investedAmount: 46.29,
//       earnedAmount: 1127.78,
//       createdAt: "2024-07-24T18:27:10.611769",
//     },
//     {
//       id: 9,
//       name: "Ivara",
//       username: "upton",
//       investedAmount: 34.67,
//       earnedAmount: 924.56,
//       createdAt: "2024-07-24T18:27:10.731075",
//     },
//     {
//       id: 10,
//       name: "Jorvik",
//       username: "vesper",
//       investedAmount: 23.12,
//       earnedAmount: 731.89,
//       createdAt: "2024-07-24T18:27:10.84265",
//     },
//   ];
// };

// export const getLottery = async (): Promise<Lottery[]> => {
//   await delayedPromise();
//   return [
//     {
//       id: 1,
//       naming: "Level1",
//       priceAmount: 10,
//       trendingStatus: "TOP",
//       totalPrizeAmount: 100,
//       investModelStatus: "LOCKED",
//       investModelLevel: "LEVEL 1",
//       unlockDate: null,
//       createdAt: "2024-07-24T18:27:10.731075",
//     },
//     {
//       id: 2,
//       naming: "Level2",
//       priceAmount: 10,
//       trendingStatus: "TOP",
//       totalPrizeAmount: 100,
//       investModelStatus: "LOCKED",
//       investModelLevel: "LEVEL 1",
//       unlockDate: null,
//       createdAt: "2024-07-24T18:27:10.731075",
//     },
//     {
//       id: 3,
//       naming: "Level3",
//       priceAmount: 10,
//       trendingStatus: "TOP",
//       totalPrizeAmount: 100,
//       investModelStatus: "AVAILABLE",
//       investModelLevel: "LEVEL 1",
//       unlockDate: null,
//       createdAt: "2024-07-24T18:27:10.731075",
//     },
//     {
//       id: 4,
//       naming: "Level4",
//       priceAmount: 10,
//       trendingStatus: "TOP",
//       totalPrizeAmount: 100,
//       investModelStatus: "AVAILABLE",
//       investModelLevel: "LEVEL 1",
//       unlockDate: null,
//       createdAt: "2024-07-24T18:27:10.731075",
//     },
//   ];
// };

// export const updateTopUser = async (user: TopUsers) => {
//   await new Promise((res) => setTimeout(res, 1000));
//   return true;
// };

// export const updateLottery = async (lottery: Lottery) => {
//   await new Promise((res) => setTimeout(res, 1000));
//   return true;
// };
// export const getDeposits = async (): Promise<Deposit[]> => {
//   return [
//     {
//       id: 1,
//       name: "Test Name asd",
//       amount: 100,
//       adress: "asdsdsd3213i3jiojasojdoajsidjo3213",
//       createdAt: "2024-07-24T18:27:10.731075",
//     },
//     {
//       id: 2,
//       name: "Test Name asd",
//       amount: 200,
//       adress: "asdsdsd3213i3jiojasojdoajsidjo3213",
//       createdAt: "2024-04-24T18:27:10.731075",
//     },
//   ];
// };

// export const getWithdraw = async (): Promise<Withdraw[] | undefined> => {
//   return [
//     {
//       id: 1,
//       transactionAmount: 213,
//       transactionAmountInCrypto: 0.3738094765497718,
//       currency: "BNB20",
//       cryptoAddress: "asasd2easdas",
//       description: "Desc",
//       email: "rfdfd@gmail.com",
//       withdrawStatus: "REJECTED",
//     },
//     {
//       id: 2,
//       transactionAmount: 12,
//       transactionAmountInCrypto: 11.999667637645882,
//       currency: "USDTTRC",
//       cryptoAddress: "THeCXwiqb7381hzgl1891",
//       description: null,
//       email: "dgugsr@gmail.com",
//       withdrawStatus: "REJECTED",
//     },
//     {
//       id: 3,
//       transactionAmount: 31,
//       transactionAmountInCrypto: 30.999663989446127,
//       currency: "USDTTRC",
//       cryptoAddress: "TLYDrGmSBUbvaJDTxD1tVHSdsoQthnT7XG",
//       description: "",
//       email: "jashkrs@gmail.com",
//       withdrawStatus: "APPROVED",
//     },
//     {
//       id: 4,
//       transactionAmount: 30.99,
//       transactionAmountInCrypto: 30.990438538216978,
//       currency: "USDTTRC",
//       cryptoAddress: "TLYDrGmSBUbvaJDTxD1tVHSdsoQthnT7XG",
//       description: null,
//       email: "newtraders73@gmail.com",
//       withdrawStatus: "APPROVED",
//     },
//     {
//       id: 5,
//       transactionAmount: 30,
//       transactionAmountInCrypto: 30.003645329580117,
//       currency: "USDTTRC",
//       cryptoAddress: "TLYDrGmSBUbvaJDTxD1tVHSdsoQthnT7XG",
//       description: null,
//       email: "newtraders73@gmail.com",
//       withdrawStatus: "APPROVED",
//     },
//     {
//       id: 6,
//       transactionAmount: 15,
//       transactionAmountInCrypto: 15.005094906877053,
//       currency: "USDTTRC",
//       cryptoAddress: "TSWTGpyZQjk5PDdKRckzaHdoRx6hAvio1Z",
//       description: "Withdrawal ",
//       email: "nbrian8621@gmail.com",
//       withdrawStatus: "APPROVED",
//     },
//     {
//       id: 7,
//       transactionAmount: 14,
//       transactionAmountInCrypto: 13.999744383541678,
//       currency: "USDTTRC",
//       cryptoAddress: "TYGpA7Fh8yTq2HbqaBDGXWDBGGkqWN1S3j",
//       description: "Withdraw",
//       email: "marcangelogabriele@gmail.com",
//       withdrawStatus: "APPROVED",
//     },
//     {
//       id: 8,
//       transactionAmount: 20,
//       transactionAmountInCrypto: 0.035029192676383665,
//       currency: "BNB20",
//       cryptoAddress: "0x9b20e94a33eac65add1afd970ad4c9ba06c66283",
//       description: null,
//       email: "mumberetian@gmail.com",
//       withdrawStatus: "APPROVED",
//     },
//     {
//       id: 9,
//       transactionAmount: 75,
//       transactionAmountInCrypto: 74.99096655325583,
//       currency: "USDTTRC",
//       cryptoAddress: "TTshoxKLK9SWf25SKJP2oVjfunnMg45MFF",
//       description: "Please send payment ",
//       email: "fmd525561@gmail.com",
//       withdrawStatus: "APPROVED",
//     },
//   ];
// };

// // ERROR HANDLER FOR LOTTERY AND TOP USERS
// // STYLES
