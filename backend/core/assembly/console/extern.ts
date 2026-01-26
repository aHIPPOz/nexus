// Déclarations externes pour l’API console pilotée par JS
@external("nexus.console", "log")
declare function js_console_log(ptr: i32, len: i32): void;

@external("nexus.console", "info")
declare function js_console_info(ptr: i32, len: i32): void;

@external("nexus.console", "warn")
declare function js_console_warn(ptr: i32, len: i32): void;

@external("nexus.console", "error")
declare function js_console_error(ptr: i32, len: i32): void;
