'use strict';

const blogitem = require('..');
const assert = require('assert').strict;

assert.strictEqual(blogitem(), 'Hello from blogitem');
console.info('blogitem tests passed');
