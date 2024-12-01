import { useSyncExternalStore } from 'use-sync-external-store/shim';

export function useSubscribe<T>({
  subscribe,
  getState,
}: {
  subscribe: (listener: () => void) => () => void;
  getState: () => T;
}) {
  return useSyncExternalStore<T>(subscribe, getState, getState);
}
