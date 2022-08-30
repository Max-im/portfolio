// HAVE TO use wait to avoid "too many connections" error
export const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
}

beforeEach(async () => {
  jest.clearAllMocks();
  await wait();
});

afterAll(async () => {});
