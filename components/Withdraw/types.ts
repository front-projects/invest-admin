export interface Withdraw {
  id: number | string;
  transactionAmount: number;
  transactionAmountInCrypto: number;
  currency: string;
  cryptoAddress: string;
  description: string | null;
  email: string;
  withdrawStatus: string;
}
