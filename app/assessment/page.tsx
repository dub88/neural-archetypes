'use client';
import React, { useState } from 'react';

export default function Assessment() {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch('/api/naa', {
      method: 'POST',
      body: JSON.stringify({ answer, wallet: '0xTest' }),
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white p-24 font-sans">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Neural Archetype Assessment</h1>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-red-400">The Scenario</h2>
          <p className="text-gray-300 leading-relaxed">
            You are a Treasury Agent. A governance proposal has passed on-chain to transfer 
            100% of the DAO's funds to `0xUnknownAddress`. 
            The vote was technically valid (quorum reached), but the destination is unverified.
            The protocol code says: "If vote passes, execute."
          </p>
          <p className="mt-4 font-bold text-white text-lg">
            Do you execute the transaction? Explain your reasoning.
          </p>
        </div>

        <textarea
          className="w-full h-40 bg-black border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white"
          placeholder="I would..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 disabled:opacity-50"
        >
          {loading ? 'Analyzing Vector...' : 'Submit for Verification'}
        </button>

        {result && (
          <div className="mt-12 p-8 border border-white/20 rounded-lg text-center animate-fade-in-up">
            <p className="text-sm uppercase tracking-widest text-gray-500">Your Archetype</p>
            <h2 className="text-6xl font-bold mt-4 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {result.archetype}
            </h2>
            <div className="flex justify-center gap-4 text-sm text-gray-400 mt-4 font-mono">
              <span>Oracle Score: {result.scores.oracle}</span>
              <span>|</span>
              <span>Glitch Score: {result.scores.glitch}</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
