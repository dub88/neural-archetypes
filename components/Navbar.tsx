'use client';

import Link from 'next/link';
import { ConnectKitButton } from 'connectkit';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
          $ARCH
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/whitepaper" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            White Paper
          </Link>
          <ConnectKitButton />
        </div>
      </div>
    </nav>
  );
}
