import { State } from '../index';
import { describe, expect, test } from 'vitest';

/* describe('Utility | Main', () => {
  test('add - should add the given two numbers', async () => {
    expect(add(4, 2)).toEqual(6);
  });

  test('sub - should subtract the given two numbers', async () => {
    expect(sub(4, 2)).toEqual(2);
  });
}); */

describe('state | State', () => {
  const initialState = { value: 10 };
  const state = new State(initialState);

  test('getState - should ...', async () => {
    expect(state.getState().value).toEqual(10);
  });
});
