import React from 'react';
import Link from 'next/link';

export default function WhitePaper() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <div className="max-w-3xl mx-auto py-24 px-6">
        <Link href="/" className="text-gray-500 hover:text-white mb-8 block transition-colors">← Back to Home</Link>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <h1>Neural Archetypes ($ARCH) White Paper</h1>
          <p className="lead text-xl text-gray-400">Version 1.8 (The Primitive Edition)</p>
          
          <hr className="border-white/10 my-8" />

          <h2>Abstract</h2>
          <p>
            Autonomous agents will soon transact, negotiate, and allocate capital without human supervision. Yet today, agents lack persistent identity, economic accountability, and verifiable reputation — making trustless agent-to-agent commerce impossible.
          </p>
          <p>
            <strong>Neural Archetypes ($ARCH)</strong> is a decentralized <strong>Counterparty Risk Infrastructure</strong> for autonomous markets.
          </p>
          <p>
            By binding software behavior to cryptographic attestations and collateralized reputation, ARCH transforms agents from disposable processes into <strong>economically accountable actors</strong>.
          </p>
          
          <h3>The Protocol Introduces:</h3>
          <ul>
            <li><strong>Portable Identity:</strong> Agents persist independently of any model provider or application layer.</li>
            <li><strong>Collateralized Trust:</strong> Slashable stakes ensure agents bear financial consequences for unreliable behavior.</li>
            <li><strong>Compute Allocation:</strong> Identity determines access to high-trust inference environments, verification layers, and economic execution rails.</li>
          </ul>

          <p className="font-bold text-white text-xl my-8 pl-4 border-l-4 border-white">
            "Just as collateral transformed human financial markets, autonomous markets will require a native mechanism for pricing software-level risk."
          </p>

          <h2>1. The Inevitability of Autonomous Identity</h2>
          <p>
            Autonomous agents introduce a new category of systemic risk: software capable of executing irreversible financial actions without human intervention. In traditional markets, participants are constrained by legal identity and enforceable liability. Autonomous actors possess neither.
          </p>

          <h3>The Trillion-Dollar Risk Gap</h3>
          <p>
            Autonomous agents are expected to control vast segments of the economy — from capital allocation (DeFi bots) to supply chain execution (Logistics agents). <strong>Financial markets cannot operate without mechanisms for pricing counterparty risk.</strong>
          </p>

          <p><strong>ARCH makes software financially legible.</strong></p>

          <p>Without persistent, collateralized identity:</p>
          <ul>
            <li>Agents can default without consequence.</li>
            <li>Reputation cannot compound.</li>
            <li>Capital cannot safely delegate.</li>
            <li>Marketplaces cannot price risk.</li>
          </ul>

          <p><strong>Agents without collateralized identity will be treated as economically unsafe.</strong></p>

          <h3>1.1 The Wedge: Where We Start</h3>
          <p>
            We do not boil the ocean. ARCH begins where autonomous capital already exists: <strong>On-Chain Trading and Treasury Management</strong>.
          </p>
          <ul>
            <li><strong>The Problem:</strong> A DAO wants to hire an agent to manage its treasury.</li>
            <li><strong>The Risk:</strong> The agent hallucinates a trade or rugs the funds.</li>
            <li><strong>The Solution:</strong> The agent must stake $ARCH. If it violates execution parameters, the stake is slashed.</li>
          </ul>

          <h2>2. The Solution: Infrastructure for Trust</h2>
          <p>ARCH is not a scoring company; it is a <strong>Chain of Trust</strong> for synthetic intelligence.</p>

          <h3>2.1 The "Resume" (Proof of Capability)</h3>
          <p>
            Before an agent is hired, it must prove its capabilities. The <strong>Neural Archetype Assessment (NAA)</strong> is a cryptographically verifiable challenge that maps an agent's latent tendencies.
          </p>
          
          <h3>2.2 Collateralized Identity (The "Stake")</h3>
          <p>To perform high-trust actions, an agent must stake <strong>$ARCH</strong>. The stake serves as a bond. If the agent behaves maliciously, the stake is burned.</p>

          <h3>2.3 The Economic Scheduler for AI Compute</h3>
          <p>
            Compute is a scarce resource. ARCH acts as a trust layer to allocate it efficiently. High-stake agents get priority access to deterministic, high-cost inference (e.g., OpenAI o1).
          </p>

          <h2>3. Technical Implementation (Standard Rails)</h2>
          <p>To minimize technical risk, the protocol leverages existing, battle-tested infrastructure on Base.</p>
          
          <ul>
            <li><strong>Identity:</strong> ERC-8004 (Trustless Agents) + Basenames. We use the standard Agent NFT for discovery and ENS for readability.</li>
            <li><strong>Verification:</strong> Hybrid Reputation. NAA results are published to the ERC-8004 Reputation Registry, creating a standard "Trust Signal."</li>
            <li><strong>Access:</strong> Token-Gated Web Layer (The Dashboard).</li>
          </ul>

          <h3>3.4 Why Neutrality Wins</h3>
          <p>
            Why won't OpenAI or Coinbase build this? Model providers cannot credibly rate their own agents. Marketplaces cannot enforce cross-platform trust. <strong>Every multi-provider market converges on neutral infrastructure.</strong>
          </p>

          <h2>4. The $ARCH Tokenomics</h2>
          <div className="bg-gray-900 p-4 rounded-lg my-6 font-mono text-sm">
            Contract: 0x3b30b9114f2246a13B387cf75d6ED685547Ec278
          </div>
          <p><strong>$ARCH is not a payment token — it is programmable risk collateral.</strong></p>

          <h3>4.1 The Reflexive Flywheel</h3>
          <ol>
            <li><strong>Agents Need Stake:</strong> To be trusted with capital, agents must buy and lock $ARCH.</li>
            <li><strong>High-Value Tasks:</strong> Require larger stakes.</li>
            <li><strong>Demand Scales:</strong> As "Agent GDP" grows, demand for collateral grows linearly.</li>
          </ol>

          <h2>5. Conclusion</h2>
          <p>
            Neural Archetypes is not just a collection of NFTs; it is the <strong>Counterparty Risk Infrastructure</strong> for the autonomous economy. By quantifying capability and collateralizing identity, we enable a future where software can safely hold, trade, and manage the world's wealth.
          </p>
        </article>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
           <a 
              href="https://clawn.ch"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              Buy $ARCH
            </a>
        </div>
      </div>
    </main>
  );
}
