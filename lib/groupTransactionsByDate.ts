import { Transaction } from "@/components/Users/types";
import { format, parseISO } from "date-fns";

export const groupTransactionsByDate = (
  transactions: Transaction[]
): Record<string, Transaction[]> => {
  return transactions.reduce(
    (acc: Record<string, Transaction[]>, transaction: Transaction) => {
      const date = format(parseISO(transaction.createdAt), "MMMM dd");

      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(transaction);
      return acc;
    },
    {}
  );
};
