import { js_console_log, js_console_info, js_console_warn, js_console_error } from "./extern";

export declare class NexusConsole {
  static log(msg: string): void {
    const ptr = changetype<usize>(String.UTF8.encode(msg));
    js_console_log(ptr, msg.length);
  }
  static info(msg: string): void {
    const ptr = changetype<usize>(String.UTF8.encode(msg));
    js_console_info(ptr, msg.length);
  }
  static warn(msg: string): void {
    const ptr = changetype<usize>(String.UTF8.encode(msg));
    js_console_warn(ptr, msg.length);
  }
  static error(msg: string): void {
    const ptr = changetype<usize>(String.UTF8.encode(msg));
    js_console_error(ptr, msg.length);
  }
}
