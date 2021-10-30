import { Throttle } from "interfaces/throttle";

export function throttle<T extends (...args: any) => any>(
  func: T,
  limit: number
): Throttle<T> {
  let inThrottle: boolean;
  let lastResult: ReturnType<T>;

  return function (this: any): ReturnType<T> {
    const args = arguments;
    const context = this;

    if (!inThrottle) {
      inThrottle = true;

      setTimeout(() => (inThrottle = false), limit);

      lastResult = func.call(context, ...args);
    }

    return lastResult;
  };
}
