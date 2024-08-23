export interface FetchUsersProps {
  page: number;
  pageSize: number;
}

export interface FetchUsersResponse {
  users: UserForTable[];
  totalUsers: number;
}

export interface User {
  id: number | string;
  login: string;
  username: string;
  name: string;
  reflink: string | null;
  balanceAmount: number;
  investModels: Lottery[];
  transactions: Transaction[];
}

export interface UserForTable {
  id: string | number;
  login: string;
  name: string;
  username: string;
  upperReferralLogin: string;
  role?: string;
  createdAt: string;
}

export interface Lottery {
  id?: string | number;
  naming: string;
  priceAmount: number;
  trendingStatus?: string;
  partnerBonusAmount?: number;
  mainBonusAmount?: number;
  lostRefIncomeAmount?: number;
  totalPrizeAmount?: number;
  investModelStatus?: string;
  investModelLevel?: string;
  unlockDate?: null | string;
  createdAt: string;
  defaultStatus: string;
}

export interface Transaction {
  transactionAmount: number;
  description: string;
  transactionType: string;
  incomeType: string;
  createdAt: string;
}

export interface TopUsers {
  id?: string | number;
  name: string;
  username: string;
  investedAmount?: number;
  earnedAmount: number;
  createdAt?: string;
}

export interface UpdatedUser {
  id: string | number;
  name: string;
  earnedAmount: number;
}