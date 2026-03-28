import React from "react";
import { Search, Trophy, UserPlus, Telescope } from "lucide-react";

interface CreatorSearchProps {
  placeholder?: string;
}

const CreatorSearch: React.FC<CreatorSearchProps> = ({
  placeholder = "Search creators…",
}) => (
  <div className="relative w-full max-w-sm">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stellar-muted" />
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-full border border-stellar-border bg-stellar-surface pl-10 pr-4 py-2.5 text-sm text-stellar-text placeholder:text-stellar-muted focus:outline-none focus:ring-2 focus:ring-stellar-accent/40 transition"
    />
  </div>
);

const useWalletConnected = (): boolean => {
  return false;
};

export interface CreatorNotFoundProps {
  username: string;
}

const CreatorNotFound: React.FC<CreatorNotFoundProps> = ({ username }) => {
  const isConnected = useWalletConnected();

  return (
    <section
    className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center"
      aria-label={`Creator @${username} not found`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 before:absolute before:left-1/4 before:-top-16 before:h-72 before:w-72 before:rounded-full before:bg-stellar-accent/10 before:blur-3xl after:absolute after:right-1/4 after:bottom-0 after:h-56 after:w-56 after:rounded-full after:bg-stellar-secondary/10 after:blur-3xl"
      />

      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-stellar-border bg-stellar-surface shadow-lg shadow-stellar-accent/5 animate-bounce-slow">
        <Telescope className="h-10 w-10 text-stellar-accent" strokeWidth={1.4} />
      </div>

      <h1 className="mb-2 text-2xl font-semibold tracking-tight text-stellar-text sm:text-3xl">
        Creator{" "}
        <span className="font-mono text-stellar-accent">@{username}</span>{" "}
        not found
      </h1>
      <p className="mb-10 max-w-md text-sm leading-relaxed text-stellar-muted">
        This username hasn't been registered on Stellar-Tipz yet. You can
        search for someone else, browse the leaderboard, or claim this handle
        for yourself.
      </p>

      <div className="mb-2 flex w-full max-w-sm flex-col items-center gap-3">
        <p className="text-xs font-medium uppercase tracking-widest text-stellar-muted">
          Maybe try searching?
        </p>
        <CreatorSearch placeholder="Find a creator…" />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        
          href="/leaderboard"
          className="inline-flex items-center gap-2 rounded-full border border-stellar-border bg-stellar-surface px-5 py-2.5 text-sm font-medium text-stellar-text transition hover:border-stellar-accent/50 hover:bg-stellar-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stellar-accent/40"
      >
          <Trophy className="h-4 w-4 text-stellar-accent" />
          Browse Leaderboard
        </a>

        {isConnected && (
          
            href="/profile"
            className="inline-flex items-center gap-2 rounded-full bg-stellar-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stellar-accent/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stellar-accent/60"
          >
            <UserPlus className="h-4 w-4" />
            Register @{username}
          </a>
        )}
      </div>
    </section>
  );
};

export default CreatorNotFound;
