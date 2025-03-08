import { createRoot } from "react-dom/client";
import "./index.css";
import RouterUrl from "./router";
import { BrowserRouter } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { config } from "./config/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RouterUrl />
            </QueryClientProvider>
        </WagmiProvider>
    </BrowserRouter>
);
