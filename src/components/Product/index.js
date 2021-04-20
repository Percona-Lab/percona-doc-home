import React from 'react';
import styles from './styles.module.css'

const Product = ({linkUrl, logo, imageUrl, imageWidth, title, description}) => (
  <div className={styles.container}>
    <a href={linkUrl}>
      {logo && <div className={`${styles.logo} ${logo}`}></div>}
      {imageUrl && <img width={imageWidth || '160px'} className={styles.image} src={imageUrl} />}
    </a>
    <h5 className={styles.title}>{title}</h5>
    <p className={styles.description}>{description}</p>
    <div className={styles.buttonContainer}>
      {linkUrl && <a href={linkUrl} className={styles.button}>Learn More</a>}
    </div>
  </div>
);

export default Product;
