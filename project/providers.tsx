import { PropsWithChildren } from "react"
import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "@/lib/react-query/query-client"
import { ThemeProvider } from "@/styles/theme-provider"

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
