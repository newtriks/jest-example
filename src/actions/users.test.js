import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchUsers, success } from './users';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should execute fetch data', () => {
  const store = mockStore({})

  return store.dispatch(fetchUsers())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(success())
    })
})
