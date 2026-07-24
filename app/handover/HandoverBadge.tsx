"use client";

import Link from "next/link";
import { Home, ChevronLeft } from "lucide-react";

export function HandoverBadge() {
  return (
    <div className="fixed top-20 md:top-24 left-4 sm:left-6 z-40">
      <Link
        href="/"
        className="group flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm hover:border-amber-500/40 transition-all duration-200"
      >
        <ChevronLeft className="w-3 h-3 text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
        <Home className="w-3.5 h-3.5 text-amber-400" />
        <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
          Handover
        </span>
      </Link>
    </div>
  );
}

