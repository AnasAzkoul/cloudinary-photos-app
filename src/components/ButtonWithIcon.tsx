import React from 'react';
import { Button } from './ui/button';

interface ButtonWithIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
    asChild?: boolean
};

const ButtonWithIcon = ({children, className, variant, asChild}: ButtonWithIconProps) => {
  return (
    <Button
      variant={variant}
      className={`justify-start flex gap-2 ${className}`}
      asChild={asChild}
    >
      {children}
    </Button>
  );
};

export default ButtonWithIcon;
