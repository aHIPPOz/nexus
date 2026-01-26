// ================================
// ABI Console Nexus (host agnostic)
// ================================

@external("nexus.console", "emit")
declare function nexus_console_emit(
  level: i32,   // LogLevel
  ptr: i32,     // UTF-8 buffer
  len: i32
): void;

// ================================
// Log Levels (ABI STABLE)
// ================================

export enum LogLevel {
    LOG   = 0,
    INFO  = 1,
    WARN  = 2,
    ERROR = 3,
    DEBUG = 4,
    ASSERT = 5,
  }
  
// ================================
// Core emitter
// ================================

@inline
function emit(level: LogLevel, message: string): void {
  nexus_console_emit(
    level,
    changetype<i32>(message),
    message.length   // nombre de code units UTF-16
  );
}


// ================================
// Console publique
// ================================

export namespace Console {

    export function log(msg: string): void {
      emit(LogLevel.LOG, msg);
    }
  
    export function info(msg: string): void {
      emit(LogLevel.INFO, msg);
    }
  
    export function warn(msg: string): void {
      emit(LogLevel.WARN, msg);
    }
  
    export function error(msg: string): void {
      emit(LogLevel.ERROR, msg);
    }
  
    export function debug(msg: string): void {
      emit(LogLevel.DEBUG, msg);
    }
  
    export function assert(condition: bool, msg: string = "Assertion failed"): void {
      if (!condition) {
        emit(LogLevel.ASSERT, msg);
      }
    }
  }
  