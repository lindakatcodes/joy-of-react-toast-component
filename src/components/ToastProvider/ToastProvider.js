import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastArray, setToastArray] = React.useState([]);

  const dismissAllToasts = React.useCallback(() => {
    setToastArray([]);
  }, []);
  useEscapeKey(dismissAllToasts);

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
