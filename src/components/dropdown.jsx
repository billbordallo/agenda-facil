import React, { useEffect, useRef } from 'react';
import '../styles/dropdown.css';

const Dropdown = ({ options, value, onChange, isOpen, setIsOpen }) => {
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, setIsOpen]);
  
    const handleOptionClick = (option) => {
      onChange(option);
      setIsOpen(false);
      document.querySelector("#option-box").style.display = "none";
    };
  
    return (
      <div className="dropdown-customizado" ref={dropdownRef}>
        <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
          {value}
        </div>
        {isOpen && (
          <div className="dropdown-options" id="option-box">
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Dropdown;