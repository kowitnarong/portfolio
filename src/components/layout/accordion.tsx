'use client';

import { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import styles from './styles/accordion.module.css';

type AccordionProps = {
  title: string;
  content: string | React.ReactNode;
  className?: string;
  href: string;
  theme: string | undefined;
  pathname: string;
  router: any;
};

export const Accordion = (props: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${props.className} ${styles.accordion}`}>
      <div className={`${styles.accordionTitle}`} onClick={() => setIsActive(!isActive)}>
        {props.pathname.includes(props.href) ? (
          <span className={props.theme === 'light' ? 'text-[#0070f0]' : 'text-[#f5a524]'}>
            {props.title}
          </span>
        ) : (
          props.title
        )}
        <div>
          {isActive ? (
            <RiArrowDropUpLine size={24} className="mt-0.5" />
          ) : (
            <RiArrowDropDownLine size={24} className="mt-0.5" />
          )}
        </div>
      </div>
      {isActive && <div className={`${styles.accordionContent}`}>{props.content}</div>}
    </div>
  );
};
