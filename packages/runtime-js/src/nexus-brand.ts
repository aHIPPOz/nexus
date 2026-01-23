// NexusBrand : branding universel pour identification de type
export function NexusBrand(obj, type) {
  obj.__nexusType = type;
  obj[type + '_brand'] = true;
  return obj;
}
