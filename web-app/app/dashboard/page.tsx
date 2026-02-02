import React from 'react';

export default function Dashboard() {
  // TODO: Add token gating logic here
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8">The Inner Circle</h1>
      <p>Welcome, verified holder.</p>
      
      <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-4xl">
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="font-bold">Agent Directory</h3>
          <p className="text-sm text-gray-400">Search verified agents.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="font-bold">API Access</h3>
          <p className="text-sm text-gray-400">Get your keys.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="font-bold">Governance</h3>
          <p className="text-sm text-gray-400">Vote on proposals.</p>
        </div>
      </div>
    </main>
  );
}
