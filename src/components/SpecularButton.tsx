'use client';

import React, { useRef } from 'react';

interface SpecularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children,
  size = 'md',
  onClick,
  className = '',
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty('--x', `${x}px`);
    btnRef.current.style.setProperty('--y', `${y}px`);
  };

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3.5',
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      className={`specular-button ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 font-medium tracking-tight">{children}</span>
    </button>
  );
};
