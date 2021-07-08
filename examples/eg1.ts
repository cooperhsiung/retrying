/**
 * Created by Cooper on 2021/06/16.
 */
import retry from '../index';

async function test(a: number, b: boolean) {
  console.log(a, b);
  throw new Error('12123');
  // return 1;
}

retry(test, { delay: 1000 }, 1, true)
  .then((ret) => {
    console.log(ret);
  })
  .catch((err) => {
    console.error(err);
  });
