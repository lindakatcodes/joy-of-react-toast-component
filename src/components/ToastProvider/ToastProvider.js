import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastArray, setToastArray] = React.useState([]);

  function addToastToList(message, variant) {
    const newToast = {
      variant,
      message,
      id: crypto.randomUUID(),
    };
    setToastArray([...toastArray, newToast]);
  }

  function dismissToast(id) {
    const nextToastArray = [...toastArray].filter((toast) => toast.id !== id);
    setToastArray(nextToastArray);
  }

  return (
    <ToastContext.Provider value={{ toastArray, addToastToList, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
