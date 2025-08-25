// src/components/CookieConsent.jsx
import React, { useState } from "react";
import styles from '../components/CookiesConsent.module.css' // 👈 точка и слэш, без лишних ../

export default function CookieConsent() {
  const [visible, setVisible] = useState(true);

  const accept = () => setVisible(false);
  const decline = () => setVisible(false);

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
