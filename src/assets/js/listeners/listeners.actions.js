import { fetchers } from '../fetchers/fetchers/';
const {getsomeData} = fetchers;

export const listenersList = [
    {
        "target" : document.querySelector('#btn-data'),
        "eventName" : 'click',
        "callback" : getsomeData
    }
]