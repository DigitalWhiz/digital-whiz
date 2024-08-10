import React from 'react';
import styles from '../../../styles/TitleLogo.module.css';

interface TitleLogoProps {
  id?: string;
  title: string;
  caption?: string;
  className?: string;
  titleClassName?: string;
  captionClassName?: string;
  isBlock?: boolean; 
}

export const TitleLogo: React.FC<TitleLogoProps> = ({ 
  title, 
  caption, 
  className = '', 
  titleClassName = '', 
  captionClassName = '',
  isBlock = false // Por defecto
}) => {
  return (
    <h1 className={`${className} ${styles.titleLogo} ${titleClassName}`}>
      {caption && (
        <span className={`${styles.caption} ${captionClassName} ${isBlock ? 'block' : ''}`}>
          {caption}
        </span>
      )}
      {title}
    </h1>
  );
}

export const TitleSm: React.FC<{ title: string; caption?: string; className?: string }> = ({ title, caption, className = '' }) => {
  return (
    <div className={`${styles.titleSm} ${className}`}>
      {caption && <div className={styles.caption}>{caption}</div>}
      {title}
    </div>
  );
};
export const Title: React.FC<{ title: string, className?: string, id?: string }> = ({ title, className = '' }) => {
  return <h1 className={`${styles.title} ${className}`}>{title}</h1>;
}
