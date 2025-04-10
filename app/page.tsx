"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import AvatarMarketplace from "@/components/AvatarMarketplace";
import TerminalLog from "@/components/TerminalLog";
import { Account } from "@/app/blockchain/account";
import { client } from "@/app/blockchain/config";
import { BaseError } from "viem";
import WalletCard from "@/components/WalletCard";

interface HomeProps {}

export default function Home({}: HomeProps) {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [logs, setLogs] = useState<(string | JSX.Element)[]>([]);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const addLog = useCallback((message: string | JSX.Element) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  }, []);

  const { data: account } = Account.useQuery();
  const { data: hash, ...createMutation } = Account.useCreate({
    client,
    addLog,
  });

  // Account Creation with Passkeys
  const loadMutation = Account.useLoad({ client });
  const isPending = createMutation.isPending || loadMutation.isPending;
  const error = createMutation.error || loadMutation.error;

  const isLoggedIn = useMemo(() => !!account?.address, [account]);

  const handleLogin = useCallback(() => {
    if (!isLoggedIn) {
      addLog("Account creation request initiated by user.");
      createMutation.mutate();
    }
  }, [isLoggedIn, addLog, createMutation]);

  useEffect(() => {
    if (hash) {
      addLog(
        <>
          Wallet generated.{" "}
          <a
            href={`https://explorer.abc.t.raas.gelato.cloud/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80"
          >
            Open on explorer.
          </a>
        </>
      );
      addLog("Account setup completed successfully.");
    }
    if (error) {
    
      addLog(
        <span className="text-red-400">
          An error has occurred:{" "}
          {error instanceof BaseError ? error.shortMessage : error.message}
        </span>
      );
    }
    setShowLoginDialog(false);
  }, [hash, error, addLog]);

  useEffect(() => {
    if (!account) return;
    addLog(
      <>
        Account connected:{" "}
        <a
          href={`https://explorer.abc.t.raas.gelato.cloud/address/${account.address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80"
        >
          {account.address}
        </a>
      </>
    );
  }, [account, addLog]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-black text-white">
        <div className="relative min-h-screen pb-64">
          <Header
            showLoginDialog={showLoginDialog}
            setShowLoginDialog={setShowLoginDialog}
            isLoggedIn={isLoggedIn}
            onLogin={handleLogin}
            addLog={addLog}
            walletAddress={account?.address}
          />
          <div className="flex-1 w-full flex flex-col items-center">
            <AvatarMarketplace isLoggedIn={isLoggedIn} addLog={addLog} />
            {account?.address && <WalletCard address={account?.address} />}
          </div>
          <TerminalLog
            logs={logs}
            isOpen={isTerminalOpen}
            setIsOpen={setIsTerminalOpen}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
