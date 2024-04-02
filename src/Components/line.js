import React, { useState } from 'react';
import img from '../logo/image.png'
import styles from '../Components/styles.module.css';
//hbdycvn sdc
const LineFiller = () => {
  const [fillPercentage, setFillPercentage] = useState(0);

  const fillLine = () => {
    setFillPercentage(fillPercentage + 25); // Increment fillPercentage by 25
  };

  return (
    <div className={styles.sidebarDiv}>
      <ul className={styles.uli}>
      <li className={styles.unorderList}>
          <span></span> <img src={img} alt="scd" /> <h5>Personal Details</h5>
        </li>
        {/* Other list items */}
      </ul>
      <div
        className={styles.fillLine} // Apply this class for styling the line
        style={{
          background: `linear-gradient(to bottom, orange ${fillPercentage}%, transparent ${fillPercentage}%)`,
        }}
      ></div>
      <button onClick={fillLine}>Fill 25%</button>
    </div>
  );
};

export default LineFiller;
