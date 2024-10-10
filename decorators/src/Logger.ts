export function Logger(
  _: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method: ${propertyKey}`);
    console.log(`Arguments:`, args);

    const result = originalMethod.apply(this, args);

    console.log(`Method ${propertyKey} returned:`, result);

    return result;
  };

  return descriptor;
}
