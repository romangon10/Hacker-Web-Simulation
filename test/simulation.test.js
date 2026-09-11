import test from 'node:test';
import assert from 'node:assert/strict';
import { createSimulation } from '../simulation.js';
test('startup messages occur once, in order, and balance begins after startup', () => {
  const model=createSimulation(()=>.5);
  assert.deepEqual(model.advance(1199),{lines:[],balance:0});
  assert.deepEqual(model.advance(1),{lines:[0],balance:0});
  assert.deepEqual(model.advance(4800),{lines:[1,2,3,4],balance:0});
  assert.deepEqual(model.advance(800),{lines:[],balance:.005});
});
test('zero elapsed time preserves balance; reset replays initial state', () => {
  const model=createSimulation(()=>.5);model.advance(6800);
  assert.equal(model.advance(0).balance,.005);
  model.reset();assert.deepEqual(model.advance(0),{lines:[],balance:0});
  assert.deepEqual(model.advance(1200),{lines:[0],balance:0});
});
test('invalid elapsed time is rejected', () => {
  for(const value of [-1,Infinity,NaN])assert.throws(()=>createSimulation().advance(value),RangeError);
});
