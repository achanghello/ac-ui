'use strict';

const drawer = require('..');
const assert = require('assert').strict;

assert.strictEqual(drawer(), 'Hello from drawer');
console.info('drawer tests passed');
