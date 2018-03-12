import { backend as userBackend } from 'mocks/user';
import { backend as employeeBackend } from 'mocks/employee';

async function fetchUser({ limit, offset, filters }) {
  return await userBackend({ limit, offset, filters });
}
async function fetchEmployee({ limit, offset, filters }) {
  return await employeeBackend({ limit, offset, filters });
}
export { fetchUser, fetchEmployee };
