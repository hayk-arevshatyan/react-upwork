import React, { useRef, useEffect, useState } from "react";
import styles from "./styles/Tooltip.module.scss";

const CombinedTooltipDropdown = ({ tooltipContent, tooltipPosition = "top", button, children }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const dropdownRef = useRef();

    const toggleDropdown = () => {
        if(tooltipContent !== 'Chat with Uma'){
            setDropdownOpen(prev => !prev)
        }
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            ref={dropdownRef}
            style={{ display: "inline-block", position: "relative" }}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
        >
            <button onClick={toggleDropdown} className={`${styles.navbarHelpBtns} ${dropdownOpen && styles.clicked}`} style={{ cursor: "pointer" }}>
                {button}
            </button>

            {/* TOOLTIP */}

            {!dropdownOpen && 
                <div
                    className={`
                        ${tooltipPosition === "right" ? styles.tooltipBoxRight : styles.tooltipBox}
                        ${tooltipVisible ? styles.showTooltip : ""}
                    `}
                >
                    {tooltipContent}
                </div>
            }

            {/* DROPDOWN */}

            {dropdownOpen && (
                <div className={styles.dropdownBox}>
                    {children}
                </div>
            )}
        </div>
  );
};

export default CombinedTooltipDropdown;
