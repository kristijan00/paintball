import React from 'react';

interface FormButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

const FormButton: React.FC<FormButtonProps> = props => {
  return (
    <button className={props.className}
      onClick={props.onClick}
      type={props.type || 'button'}
    >
      {props.text}
    </button>
  );
};

export default FormButton;