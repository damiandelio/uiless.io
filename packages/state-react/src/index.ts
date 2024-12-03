import { useSyncExternalStore } from 'use-sync-external-store/shim';
import { createElement, memo, type ReactNode, type JSX } from 'react';
import { createRoot } from 'react-dom/client';
import { State } from '@uiless.io/state';

export function useSubscribe<T>({
  subscribe,
  getState,
}: {
  subscribe: (listener: () => void) => () => void;
  getState: () => T;
}) {
  return useSyncExternalStore<T>(subscribe, getState, getState);
}

export class ReactHookState<T> extends State<T> {
  constructor(
    hookFn: () => T,
    Provider?: ({ children }: { children: ReactNode }) => JSX.Element,
  ) {
    super(null as T);

    const Component = memo(() => {
      const value = hookFn();
      this.update(value);
      return null;
    });

    const rootElement = document.createElement('div');
    const root = createRoot(rootElement);

    if (Provider) {
      root.render(
        createElement(Provider, null, createElement(Component, null)),
      );
    } else {
      root.render(createElement(Component, null));
    }
  }
}
