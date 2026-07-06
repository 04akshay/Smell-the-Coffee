import { Icon } from "@/components/icon";

type Friend = {
  rank: number;
  initials: string;
  name: string;
  badges: number;
  isYou?: boolean;
  avatarClasses: string;
  rankBadgeClasses: string;
};

export function FriendBoard({ friends }: { friends: Friend[] }) {
  return (
    <div className="ambient-shadow flex flex-col rounded-xl border border-tertiary/10 bg-surface-container-lowest p-6">
      <div className="mb-6 flex items-center gap-2">
        <Icon name="military_tech" className="text-bean-origin-gold" />
        <h2 className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
          Friend Board
        </h2>
      </div>

      <div className="mb-8 flex flex-col gap-4">
        {friends.map((friend) => (
          <div
            key={friend.name}
            className={
              friend.isYou
                ? "flex items-center justify-between rounded-xl border border-sage-leaf/20 bg-sage-leaf/20 p-3"
                : "flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-surface-container"
            }
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${friend.avatarClasses}`}
                >
                  {friend.initials}
                </div>
                <div
                  className={`absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border border-surface-container-lowest text-[8px] ${friend.rankBadgeClasses}`}
                >
                  {friend.rank}
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-roasted-espresso">{friend.name}</div>
                <div className="text-[10px] text-on-surface-variant">{friend.badges} Badges</div>
              </div>
            </div>
            {!friend.isYou && <Icon name="front_hand" className="text-sm text-outline" />}
          </div>
        ))}
      </div>

      <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-outline-variant py-2 text-sm font-label-md text-on-surface-variant transition-colors hover:bg-surface-container">
        <Icon name="person_add" className="text-sm" /> INVITE
      </button>
    </div>
  );
}
