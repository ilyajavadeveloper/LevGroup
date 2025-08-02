import React from 'react';

/**
 * React-компонент логотипа.
 * Берёт форму из public/images/logo.png и заливается градиентом.
 */
export default function Logo({ className }) {
    return (
        <div
            className={className}
            role="img"
            aria-label="LEV GROUP"
        />
    );
}
