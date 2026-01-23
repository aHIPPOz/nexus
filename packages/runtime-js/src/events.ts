// nexus.events : gestion universelle des événements
export const events = {
  addEventListener: (...args) => globalThis.addEventListener?.(...args),
  removeEventListener: (...args) => globalThis.removeEventListener?.(...args),
};
