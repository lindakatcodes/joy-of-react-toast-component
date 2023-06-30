import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToastArray }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              setToastArray={setToastArray}
              id={toast.id}
              currentToasts={toasts}
            >
              {toast.children}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
