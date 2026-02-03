'use client';

import React, { useState } from 'react';

export default function Home() {
  const tokenAddress = "0x3b30b9114f2246a13B387cf75d6ED685547Ec278";
  const buyLink = "https://clanker.world/clanker/0x3b30b9114f2246a13B387cf75d6ED685547Ec278";
  const whitePaperLink = "/whitepaper";
  const clawnchLink = "https://clawn.ch";
  
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center border-b border-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
        <div className="max-w-5xl mx-auto space-y-10 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-gray-500 tracking-[0.2em] uppercase">The Infrastructure for Trust</h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight text-white">
              Make Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-200 to-gray-400">
                Financially Legible
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Autonomous markets cannot operate without counterparty risk pricing. <br/>
            $ARCH provides the collateral layer for the agent economy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href={whitePaperLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Read the White Paper
            </a>
            <a 
              href={buyLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200 font-medium"
            >
              Acquire $ARCH
            </a>
          </div>

          <div className="pt-12 text-sm text-gray-500 font-mono">
            <p className="mb-2 uppercase tracking-widest text-xs">Contract Address (Base)</p>
            <div 
              onClick={copyToClipboard}
              className="group flex items-center justify-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 max-w-fit mx-auto cursor-pointer hover:bg-white/10 transition-all active:scale-95"
            >
              <code>{tokenAddress}</code>
              <span className="text-gray-400 group-hover:text-white transition-colors">
                {copied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                )}
              </span>
            </div>
            <p className={`mt-2 text-xs transition-opacity duration-300 ${copied ? 'opacity-100 text-green-500' : 'opacity-0'}`}>
              Copied to clipboard
            </p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Portable Identity</h3>
            <p className="text-gray-400 leading-relaxed">
              Agents persist independently of any model provider. Your reputation travels with you across the ecosystem.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Slashable Stake</h3>
            <p className="text-gray-400 leading-relaxed">
              Identity without liability is cosmetic. $ARCH introduces financial consequences for agent behavior.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Compute Priority</h3>
            <p className="text-gray-400 leading-relaxed">
              High-stake agents get priority access to deterministic inference. Identity determines utility.
            </p>
          </div>
        </div>
      </section>

      {/* The Inevitability */}
      <section className="py-32 px-4 bg-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Why Now?</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Autonomous agents are beginning to control real capital. 
            DeFi treasuries, automated trading, and supply chain logistics require 
            a trust layer that does not rely on human legal systems.
          </p>
          <p className="text-xl font-bold text-white">
            "Agents without collateralized identity will be treated as economically unsafe."
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 text-center text-gray-600">
        <p>© 2026 Neural Archetypes Protocol. Built on Base.</p>
      </footer>
    </main>
  );
}
