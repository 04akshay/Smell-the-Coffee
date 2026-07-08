"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "@/components/icon";
import { getPollVote, setPollVote, subscribeToCommunityInteractions } from "@/lib/community-interactions";

const POLL_ID = "rainy-day-beans";

const OPTIONS = [
  { id: "monsooned-malabar", label: "Dark Roast (Monsooned Malabar)", baseVotes: 89 },
  { id: "baba-budangiri", label: "Medium-Dark (Baba Budangiri)", baseVotes: 222 },
  { id: "ethiopia-yirgacheffe", label: "Fruity Light Roast (Ethiopia Yirgacheffe)", baseVotes: 31 },
];

function getServerVote() {
  return undefined;
}

export function WeeklyPollWidget() {
  const vote = useSyncExternalStore(
    subscribeToCommunityInteractions,
    () => getPollVote(POLL_ID),
    getServerVote
  );

  const results = OPTIONS.map((option) => ({
    ...option,
    votes: option.baseVotes + (vote === option.id ? 1 : 0),
  }));
  const totalVotes = results.reduce((sum, r) => sum + r.votes, 0);

  return (
    <div className="rounded-xl border border-tertiary/10 bg-surface-container-lowest p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Icon name="poll" className="text-roasted-espresso" />
        <h2 className="font-headline-sm text-headline-sm text-primary">Weekly Poll</h2>
      </div>
      <p className="mb-4 font-label-md font-bold text-primary">
        Best beans for a rainy Delhi monsoon day?
      </p>
      <div className="space-y-3">
        {results.map((option) => {
          const pct = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
          const selected = vote === option.id;
          return (
            <label
              key={option.id}
              className="group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-lg border border-tertiary/20 p-3 transition-colors hover:bg-surface-container-low"
            >
              {vote && (
                <div
                  className={
                    selected
                      ? "absolute inset-0 bg-sage-leaf/10"
                      : "absolute inset-0 bg-surface-variant/40"
                  }
                  style={{ width: `${pct}%` }}
                />
              )}
              <div className="relative z-10 flex items-center gap-3">
                <input
                  type="radio"
                  name="weekly-poll"
                  checked={selected}
                  onChange={() => setPollVote(POLL_ID, option.id)}
                  className="h-4 w-4 text-sage-leaf focus:ring-sage-leaf"
                />
                <span
                  className={
                    selected
                      ? "font-body-md font-medium text-primary"
                      : "font-body-md text-primary group-hover:font-medium"
                  }
                >
                  {option.label}
                </span>
              </div>
              {vote && (
                <span className="relative z-10 font-label-caps text-sage-leaf">{pct}%</span>
              )}
            </label>
          );
        })}
      </div>
      <div className="mt-4 text-center font-label-caps text-on-surface-variant">
        {totalVotes} Votes • 2 days left
      </div>
    </div>
  );
}
