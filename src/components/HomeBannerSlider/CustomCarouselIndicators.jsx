import React from 'react';
import styles from './CustomCarouselIndicators.module.scss'; // Assuming you have a SCSS module for styling
import Link from 'next/link';

const CustomCarouselIndicators = ({ items, activeIndex, onClick,  }) => {
  return (
    <div className={styles.captionBox}>
    <ul className={styles.customIndicators}>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => onClick(index)}
          className={index === activeIndex ? styles.active : ''}
        >   
          <span onClick={() => {index}}>{item.text ? item.text : ''}</span>
          <Link href={item?.link}>{item.linkText? item.linkText : ''}</Link>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default CustomCarouselIndicators;