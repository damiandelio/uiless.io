import { useSyncExternalStore } from 'use-sync-external-store/shim';

export function useSubscribeState<T extends object>({
  subscribe,
  getState,
}: {
  subscribe: (listener: () => void) => () => void;
  getState: () => T;
}) {
  return useSyncExternalStore<T>(subscribe, getState, getState);
}
