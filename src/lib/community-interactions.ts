const STORAGE_KEY = "stc:community-interactions";
const CHANGE_EVENT = "stc:community-interactions-changed";

type CommunityState = {
  savedSpots: string[];
  likedPosts: string[];
  following: string[];
  pollVotes: Record<string, string>;
};

const EMPTY_STATE: CommunityState = {
  savedSpots: [],
  likedPosts: [],
  following: [],
  pollVotes: {},
};

function readState(): CommunityState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...EMPTY_STATE, ...JSON.parse(raw) } : EMPTY_STATE;
  } catch {
    return EMPTY_STATE;
  }
}

function writeState(state: CommunityState): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function toggleInList(list: string[], id: string): string[] {
  return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
}

export function isSpotSaved(cafeSlug: string): boolean {
  return readState().savedSpots.includes(cafeSlug);
}

export function toggleSpotSaved(cafeSlug: string): void {
  const state = readState();
  writeState({ ...state, savedSpots: toggleInList(state.savedSpots, cafeSlug) });
}

export function isPostLiked(postId: string): boolean {
  return readState().likedPosts.includes(postId);
}

export function toggleLikedPost(postId: string): void {
  const state = readState();
  writeState({ ...state, likedPosts: toggleInList(state.likedPosts, postId) });
}

export function isFollowing(personId: string): boolean {
  return readState().following.includes(personId);
}

export function toggleFollowing(personId: string): void {
  const state = readState();
  writeState({ ...state, following: toggleInList(state.following, personId) });
}

export function getPollVote(pollId: string): string | undefined {
  return readState().pollVotes[pollId];
}

export function setPollVote(pollId: string, optionId: string): void {
  const state = readState();
  writeState({ ...state, pollVotes: { ...state.pollVotes, [pollId]: optionId } });
}

export function subscribeToCommunityInteractions(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
