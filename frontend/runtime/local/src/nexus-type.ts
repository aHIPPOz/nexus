// NexusType : API universelle pour créer/étendre des types Nexus
export function NexusType(name, fields, options = {}) {
  return {
    __nexusType: name,
    __fields: fields,
    __options: options,
    ...fields,
    ...options.branding && { [options.branding]: true },
    ...options.mimeType && { mimeType: options.mimeType },
    ...options.htmlType && { htmlType: options.htmlType }
  };
}
