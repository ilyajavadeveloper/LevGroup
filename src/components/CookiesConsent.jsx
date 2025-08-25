// src/components/CookieConsent.jsx
import React, { useState, useEffect } from "react";
import styles from "../components/CookiesConsent.module.css";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookieConsent");
    if (!choice) {
      setVisible(true);

      // авто-закрытие через 10 секунд
      const timer = setTimeout(() => {
        localStorage.setItem("cookieConsent", "auto-closed");
        setVisible(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <span className={styles.text}>
        אנו משתמשים בעוגיות (Cookies) כדי לשפר את חווית המשתמש באתר.  
        לפרטים נוספים קרא את{" "}
        <a href="/privacy.html" className={styles.link}>מדיניות הפרטיות</a>.
      </span>
      <div className={styles.actions}>
        <button onClick={accept} className={styles.buttonAccept}>אישור</button>
        <button onClick={decline} className={styles.buttonDecline}>סירוב</button>
      </div>
    </div>
  );
}
