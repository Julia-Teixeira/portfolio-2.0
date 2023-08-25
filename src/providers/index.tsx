"use client";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/services/query";
interface QueryProviderProps {
  children: React.ReactNode;
}
export const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
