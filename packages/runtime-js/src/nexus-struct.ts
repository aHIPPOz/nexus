// NexusStruct : crée une struct typée Nexus
export function NexusStruct(name, fields, options = {}) {
  function Struct(init = {}) {
    Object.assign(this, fields, init);
    this.__nexusType = name;
    if (options.branding) this[options.branding] = true;
    if (options.mimeType) this.mimeType = options.mimeType;
    if (options.htmlType) this.htmlType = options.htmlType;
  }
  Struct.prototype = { ...fields };
  Struct.__nexusType = name;
  return Struct;
}
