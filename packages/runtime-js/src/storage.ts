// nexus.storage : abstraction universelle
export const storage = {
  getItem: (k) => globalThis.localStorage?.getItem(k),
  setItem: (k, v) => globalThis.localStorage?.setItem(k, v),
  removeItem: (k) => globalThis.localStorage?.removeItem(k),
  clear: () => globalThis.localStorage?.clear(),
};
