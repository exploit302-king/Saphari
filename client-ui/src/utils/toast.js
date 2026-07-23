import { toast } from "react-toastify";

const config = {

    position: "top-left",

    autoClose: 1000,

};

export const showSuccess = (message) =>
    toast.success(message, config);

export const showError = (message) =>
    toast.error(message, config);

export const showWarning = (message) =>
    toast.warning(message, config);

export const showInfo = (message) =>
    toast.info(message, config);