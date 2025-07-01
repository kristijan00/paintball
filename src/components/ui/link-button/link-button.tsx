import React from 'react';
import Link from 'next/link';

interface LinkButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = props => {
  return (
    <Link className={props.className}
      onClick={props.onClick}
      href={props.href}
      scroll={true}
    >
      {props.text}
    </Link>
  );
};

export default LinkButton;