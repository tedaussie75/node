import {utils} from '../utils/utils';
const apiUrl = import.meta.env.VITE_BACK_ENTRY_POINT;
const {injectHtml} = utils;

export const fetchers = {
    getsomeData : async () => {
        const dataHolder = document.querySelector(".data-holder");
        try {
            const data = await fetch('/getSomeData');
            const result = await data.json();
            injectHtml(dataHolder, result);
        } catch (error) {
            console.log(error);
            injectHtml(dataHolder, 'Failed to load data');
        }
    }
}