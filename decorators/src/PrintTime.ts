export function PrintTime(_1: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Time: ${new Date().toLocaleTimeString()}`);

    return originalMethod.apply(this, args);
  };

  return descriptor;
}
