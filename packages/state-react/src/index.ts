import { useSyncExternalStore } from 'react';

export function useSubscribeState<T extends object>({
  subscribe,
  getState,
}: {
  subscribe: (listener: () => void) => () => void;
  getState: () => T;
}) {
  return useSyncExternalStore<T>(subscribe, getState, getState);
}
