// nexus.performance : API performance universelle
export const performance = {
  now: () => globalThis.performance?.now() ?? Date.now(),
  mark: (...args) => globalThis.performance?.mark?.(...args),
  measure: (...args) => globalThis.performance?.measure?.(...args),
};
