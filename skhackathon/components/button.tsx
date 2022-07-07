import { FunctionComponent } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'orange' | 'blue';
  className?: string;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant,
  className = '',
}) => {
  const styling =
    variant === 'orange'
      ? 'bg-gradient-to-br from-[#FF4F01] to-[#FFB935] font-semibold border border-[#FF4F01]'
      : variant === 'blue'
      ? 'bg-gradient-to-br from-[#3687FF] to-[#22E895] font-semibold border border-[#3687FF]'
      : 'border border-white';
  return (
    <div
      className={`${styling} text-[20px] text-white rounded-lg p-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
