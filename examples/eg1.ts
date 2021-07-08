/**
 * Created by Cooper on 2021/06/16.
 */
import retry from '../index';

async function test() {
  throw new Error('12123');
  // return 1;
}

retry(test, { delay: 1000 })
  .then((ret) => {
    console.log(ret);
  })
  .catch((err) => {
    console.error(err);
  });
