import {listenersList} from './listeners.actions';

const eventListener = (target, action, callback) => target.addEventListener(action, callback);

export const initListeners = () => listenersList.map(({target,eventName, callback}) => eventListener(target, eventName, callback));