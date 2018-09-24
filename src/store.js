import {createStore} from 'redux';
import reducer from './reducers/index';
import {getLocal, setLocal } from './localstorage/todoLocalStorage';
import throttle from 'lodash/throttle';
const persistanceState = getLocal('state');
const store = createStore(reducer,persistanceState);

store.subscribe(throttle(() => {
  setLocal('state',store.getState())
}),1000);

export default store;
