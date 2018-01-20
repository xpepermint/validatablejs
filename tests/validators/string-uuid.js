import test from 'ava';
import { stringUUID } from '../../dist/validators';

test('fails when not a string', (t) => {
  t.is(stringUUID(true), false);
});

test('passes for valid v1', (t) => {
  t.is(stringUUID('857b3f0a-a777-11e5-bf7f-feff819cdc9f', { version: 1 }), true);
  t.is(stringUUID('857b4504-a777-11e5-bf7f-feff819cdc9f', { version: 1 }), true);
});

test('passes for valid v2', (t) => {
  t.is(stringUUID('a14e3bb3-d7a3-2ea8-9481-881eaf75fdc5', { version: 2 }), true);
  t.is(stringUUID('5a3c2348-6e2f-280e-aade-7dc8afdb18b9', { version: 2 }), true);
});

test('passes for valid v3', (t) => {
  t.is(stringUUID('49072879-c5c6-3b4e-9900-34e5df285522', { version: 3 }), true);
  t.is(stringUUID('5a3c2348-6e2f-380e-aade-7dc8afdb18b9', { version: 3 }), true);
});

test('passes for valid v4', (t) => {
  t.is(stringUUID('82ca85b8-7841-42f0-80d8-48bbe11a005b', { version: 4 }), true);
  t.is(stringUUID('58dbb3a5-a95a-4120-b4e0-483eea26ab74', { version: 4 }), true);
});

test('passes for valid v5', (t) => {
  t.is(stringUUID('482d11be-b03f-5ff3-b99d-9b6ceef18874', { version: 5 }), true);
  t.is(stringUUID('6a5b4d3f-02cf-5e2d-89d5-2f2163bb69f9', { version: 5 }), true);
});
