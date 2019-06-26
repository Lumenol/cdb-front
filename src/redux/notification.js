const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';

export const enqueueSnackbar = notification => {
    const key = notification.options && notification.options.key;

    return {
        type: ENQUEUE_SNACKBAR,
        notification: {
            ...notification,
            key: key || new Date().getTime() + Math.random(),
        },
    };
};

export function clearNotifications() {
    return {type: CLEAR_NOTIFICATIONS};
}

export default (state = [], action) => {
    switch (action.type) {
        case ENQUEUE_SNACKBAR:
            return [
                ...state,
                {
                    key: action.key,
                    ...action.notification,
                },
            ];

        case CLEAR_NOTIFICATIONS:
            return [];

        default:
            return state;
    }
};
