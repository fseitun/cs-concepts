import { Logger } from "./Logger";
import { PrintTime } from "./PrintTime";
import { Flow } from "./Flow";

export class Calculator {
  constructor() {}

  @Logger
  add(a: number, b: number): number {
    return a + b;
  }

  @PrintTime
  @Logger
  multiply(a: number, b: number): number {
    return a * b;
  }

  @Flow
  flow(): void {
    console.log("During method execution");
  }
}
