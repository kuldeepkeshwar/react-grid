import { backend } from './mock';

async function fetchUser({ limit, offset, filters }) {
  return await backend({ limit, offset, filters });
}
export { fetchUser };
