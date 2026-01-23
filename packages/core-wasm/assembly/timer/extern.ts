// AssemblyScript (AS) — utilisé comme import externe JS pour timers universels
@external("nexus.timer", "setTimeout")
declare function js_setTimeout(cbPtr: i32, ms: i32): i32;
@external("nexus.timer", "clearTimeout")
declare function js_clearTimeout(id: i32): void;
