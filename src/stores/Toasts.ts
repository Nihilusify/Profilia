import { writable } from "svelte/store";

const createToastWritable = () => {
    const { subscribe, update } = writable([] as ToastDetails[] | []);

    const add = (toast: ToastDetails) => {
        toast.timestamp = Date.now();

        // If no timeout specified, default 10 000 
        if (!('timeout' in toast)) {
            toast.timeout = 10000;
        }

        update((currToasts: ToastDetails[]) => {
            currToasts.push(toast);
            return currToasts;
        });

        if (0 < toast.timeout) {
            setInterval(() => { remove(toast.timestamp) }, toast.timeout);
        }
    };

    const remove = (timestamp: number) => {
        update((currToasts) => {
            return currToasts.filter(toast => timestamp !== toast.timestamp);
        });
    };

    return {
        subscribe,
        add,
        remove
    }
};

export const toasts = createToastWritable();