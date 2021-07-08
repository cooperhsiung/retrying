/**
 * Created by Cooper on 2021/06/16.
 */
const defaultOptions = {
  times: 2, // retry twice, means execute all three times(include your first time)
  delay: 0,
};

export default async function retry(
  fn: Function,
  options: Partial<typeof defaultOptions> = defaultOptions,
  ...args: any[]
) {
  const delay = options.delay || defaultOptions.delay;
  let times = options.times || defaultOptions.times;

  while (times >= 0) {
    try {
      return await fn(...args);
    } catch (e) {
      console.log(`retry`, (options.times || defaultOptions.times) - times, e);
      times--;
      if (delay) {
        await sleep(delay);
      }
    }
  }
}

function sleep(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
