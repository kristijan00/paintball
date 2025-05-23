import React from 'react';

interface LinkButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = props => {
  return (
    <a className={props.className}
      onClick={props.onClick}
      href={props.href}
    >
      {props.text}
    </a>
  );
};

export default LinkButton;