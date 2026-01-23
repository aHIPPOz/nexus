// nexus.crypto : API crypto universelle
export const crypto = {
  getRandomValues: (arr) => globalThis.crypto?.getRandomValues(arr),
  subtle: globalThis.crypto?.subtle,
};
