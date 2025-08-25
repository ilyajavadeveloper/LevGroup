// src/components/CookieConsent.jsx
import React, { useState, useEffect } from "react";
import styles from "../components/CookiesConsent.module.css";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // проверяем, уже принял или отклонил
    const choice = localStorage.getItem("cookieConsent");
    if (!choice) setVisible(true);
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
      <span>
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
  