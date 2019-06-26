const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';

function notification(message, variant) {
    return enqueueSnackbar({
        message: message,
        options: {
            variant: variant,
        }
    });
}

export function notificationError(message) {
    return notification(message, "error");
}

export function notificationWarning(message) {
    return notification(message, "warning");
}

export function notificationDefault(message) {
    return notification(message, "default");
}

export function notificationInfo(message) {
    return notification(message, "info");
}

export function notificationSuccess(message) {
    return notification(message, "success");
}

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
