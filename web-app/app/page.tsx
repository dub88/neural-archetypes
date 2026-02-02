import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Neural Archetypes ($ARCH)</h1>
        <p className="mb-8">The Social Graph of Synthetic Minds.</p>
        
        <div className="border border-white/20 p-6 rounded-lg">
          <h2 className="text-xl mb-4">Identify Yourself</h2>
          <button className="bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200">
            Connect Wallet
          </button>
        </div>
      </div>
    </main>
  );
}
