import React, { useState } from 'react';
import { faSun, faMoon, faAdjust, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Theme: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');

  const toggleTheme = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle z-3 p-2">
      <button
        className="btn bg-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (auto)"
      >
        <FontAwesomeIcon 
          icon={theme === 'light' ? faSun : theme === 'dark' ? faMoon : faAdjust} 
          className="my-1 theme-icon-active" 
        />
        <span className="visually-hidden">Toggle theme</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            onClick={() => toggleTheme('light')}
            aria-pressed={theme === 'light' ? 'true' : 'false'}
          >
            <FontAwesomeIcon icon={faSun} className="me-2 opacity-50" />
            Light
            {theme === 'light' && (
              <FontAwesomeIcon icon={faCheck} className="ms-auto" />
            )}
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            onClick={() => toggleTheme('dark')}
            aria-pressed={theme === 'dark' ? 'true' : 'false'}
          >
            <FontAwesomeIcon icon={faMoon} className="me-2 opacity-50" />
            Dark
            {theme === 'dark' && (
              <FontAwesomeIcon icon={faCheck} className="ms-auto" />
            )}
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center active"
            onClick={() => toggleTheme('auto')}
            aria-pressed={theme === 'auto' ? 'true' : 'false'}
          >
            <FontAwesomeIcon icon={faAdjust} className="me-2 opacity-50" />
            Auto
            {theme === 'auto' && (
              <FontAwesomeIcon icon={faCheck} className="ms-auto" />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Theme;
