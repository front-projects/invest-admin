export interface Deposit{
    id: string | number;
    transactionId: string | number,
    transactionAmount: number,
    address: string,
    destTag?: string,
    label: string,
    currency: string,
    status: string,
    blockchainConfirmations?: string | number,
    fee?: string,
    blockchainHash?: string,
    createdAt: string
}