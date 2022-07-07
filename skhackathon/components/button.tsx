import { FunctionComponent, MouseEventHandler } from 'react';
import { useState } from 'react';

type ButtonProps = {
  className?: string;
  clicked: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  clicked,
  className = '',
  onClick,
}) => {
  const [notificationClicked, setNotificationClicked] = useState(-1);
  return <div>hi</div>;
};

export default Button;
