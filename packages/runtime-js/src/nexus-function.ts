// NexusFunction : crée une fonction typée Nexus
export function NexusFunction(name, argTypes, returnType, fn, options = {}) {
  const f = function(...args) {
    return fn(...args);
  };
  f.__nexusType = name;
  f.__argTypes = argTypes;
  f.__returnType = returnType;
  if (options.branding) f[options.branding] = true;
  if (options.mimeType) f.mimeType = options.mimeType;
  if (options.htmlType) f.htmlType = options.htmlType;
  return f;
}
