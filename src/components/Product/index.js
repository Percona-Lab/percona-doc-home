import React from 'react';
import styles from './styles.module.css'
import classnames from 'classnames';

const Product = ({ linkUrl, logo, imageUrl, imageWidth, title, description }) => (
    <div className={styles.container}>
        <a href={linkUrl}>
            {logo && <div className={`${styles.logo} ${logo}`}></div>}
            {imageUrl && <img width={imageWidth || '160px'} className={styles.image} src={imageUrl} />}
        </a>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>

        {linkUrl && linkUrl.map((link) => (
            <div className={styles.buttonContainer}>
                {
                link.url
                ?
                <a href={link.url} className={styles.button}>{link.label}</a>
                :
                <a className={classnames(styles.disabled, styles.button)}>{link.label}</a>
                }
            </div>
        )
        )}
    </div>
);
export default Product;
