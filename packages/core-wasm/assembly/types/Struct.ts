export declare class Struct {
  size: i32;
  ptr: i32;

  constructor(size: i32) {
    this.size = size;
    this.ptr = __alloc(size);
  }
}
