export const throttle = (func: Function, ms: number): Function => {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastTime: number;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastTime) {
      func.apply(context, args);
      lastTime = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastTime >= ms) {
          func.apply(context, args);
          lastTime = Date.now();
        }
      }, ms - (Date.now() - lastTime));
    }
  };
};
