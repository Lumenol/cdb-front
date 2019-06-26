import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {clearNotifications} from "../redux/notification";

function selectNotifications(state) {
    return state.notifications;
}

export function useNotifications() {
    const notifications = useSelector(selectNotifications);
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    notifications.forEach(({message, options}) => {
            const key = enqueueSnackbar(message, options);
            setTimeout(() => closeSnackbar(key), 10000);
        }
    );
    if (!notifications) {
        dispatch(clearNotifications());
    }
}