export type Throttle<T extends (...args: any) => any> = (
  ...args: Parameters<T>
) => ReturnType<T>;
