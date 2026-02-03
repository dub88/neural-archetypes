'use client';

import { WagmiProvider, createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const config = createConfig(
  getDefaultConfig({
    // Your dApp's chains
    chains: [base],
    transports: {
      [base.id]: http(),
    },

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'cba012502621453258c5208687352323',

    // Required App Info
    appName: 'Neural Archetypes',
    appDescription: 'The Collateral Layer for Autonomous Capital',
    appUrl: 'https://neural-archetypes.vercel.app',
    appIcon: 'https://neural-archetypes.vercel.app/logo.png', // Placeholder
  }),
);

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider 
          theme="midnight"
          customTheme={{
            "--ck-font-family": "var(--font-inter)",
            "--ck-body-background": "#111",
            "--ck-border-radius": "8px",
          }}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
