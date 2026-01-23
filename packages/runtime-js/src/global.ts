// nexus.global : surface globale minimale Nexus
import * as console from './console.js';
import { fetch } from './fetch.js';
import * as timer from './timer.js';
import { performance } from './performance.js';
import { crypto } from './crypto.js';

export const global = {
  console,
  fetch,
  setTimeout: timer.setTimeout,
  setInterval: timer.setInterval,
  clearTimeout: timer.clearTimeout,
  clearInterval: timer.clearInterval,
  performance,
  crypto,
};
