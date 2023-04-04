'use strict';

const option = require('..');
const assert = require('assert').strict;

assert.strictEqual(option(), 'Hello from option');
console.info('option tests passed');
