import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from "../VisuallyHidden";
import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, currentToasts, variant, setToastArray, children }) {
  const variantStyle = `${styles.toast} ${styles[variant]}`;

  function handleDismiss() {
    const nextToastArray = [...currentToasts].filter(
      (toast) => toast.id !== id
    );
    setToastArray(nextToastArray);
  }

  return (
    <div className={variantStyle}>
      <div className={styles.iconContainer}>
        <ToastIcon icon={ICONS_BY_VARIANT[variant]} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={handleDismiss}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

function ToastIcon({ icon: Icon }) {
  return <Icon size={24} />;
}

export default Toast;
