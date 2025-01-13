import React, { FC, ReactNode } from 'react';
import './ButtonComponent.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant: 'orange' | 'blue';
  fullWidth?: boolean;
  icon?: React.ReactNode; // For the icon
  iconPosition?: 'left' | 'right'; // Position of the icon (default: left)
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  variant,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  type = 'button',
  className = '',
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: variant === 'orange' ? '#f2994a' : '#1274B1',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: icon ? '8px' : '0', // Add gap if icon is present
    transition: 'background-color 0.3s ease',
  };

  const iconStyle: React.CSSProperties = {
    order: iconPosition === 'left' ? 0 : 2, // Adjust icon order
  };

  return (
    <button className={`button ${className}`} type={type} style={buttonStyle} onClick={onClick} disabled={disabled}>
        {icon && <span style={iconStyle}>{icon}</span>}
        <span>{children}</span>
    </button>
  );
};

export default ButtonComponent;