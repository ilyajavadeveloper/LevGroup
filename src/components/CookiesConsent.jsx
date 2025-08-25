// src/components/CookieConsent.jsx
import React, { useState, useEffect } from "react";
import styles from "../components/CookiesConsent.module.css";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookiesAccepted")) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <span>
        אנו משתמשים בעוגיות (Cookies) כדי לשפר את חווית המשתמש באתר.  
        לפרטים נוספים קרא את{" "}
        <a href="/privacy" className={styles.link}>מדיניות הפרטיות</a>.
      </span>
      <button onClick={acceptCookies} className={styles.button}>
        אישור
      </button>
    </div>
  );
}
