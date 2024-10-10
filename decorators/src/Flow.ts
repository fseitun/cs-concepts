export function Flow(_1: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log("Before calling method");

    originalMethod.apply(this, args);

    console.log("After calling method");
  };

  return descriptor;
}
