import { Logger } from "./Logger";
import { PrintTime } from "./PrintTime";

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
}
