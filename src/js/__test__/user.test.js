import { httpGet } from '../http';
import { loadUser } from '../user';

jest.mock('../http');

test('loadUser', () => {
  httpGet.mockReturnValue('{}');

  loadUser(1);

  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});
