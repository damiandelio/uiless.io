import { produce } from 'immer';

export type StateListener = () => void;

const DEFAULT_UPDATE_OPTIONS = { shouldEmit: true };

export class State<T extends object> {
  private _state: T;
  private _listeners: StateListener[];

  constructor(initialState: T) {
    this._state = initialState;
    this._listeners = [];
  }

  public subscribe = (listener: StateListener) => {
    this._listeners = [...this._listeners, listener];
    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener);
    };
  };

  public getState = (): T => {
    return this._state;
  };

  public update = (
    value: T | ((state: T) => T | void),
    options: { shouldEmit?: boolean } = {},
  ): void => {
    options = { ...DEFAULT_UPDATE_OPTIONS, ...options };

    if (typeof value === 'function') {
      this._state = produce(this._state, value);
    } else {
      this._state = value;
    }

    if (options.shouldEmit) {
      this._emitChange();
    }
  };

  private _emitChange = () => {
    for (const listener of this._listeners) {
      listener();
    }
  };
}
