'use client';

import Image from 'next/image';

export default function Button({
  icon = '',
  type = 'primary',
  label = '',
  onClick = () => {},
  className = '',
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        (type === 'primary' &&
          'group bg-primary border-primary text-white fill-white hover:bg-white hover:fill-primary hover:text-primary hover:transition-all') ||
        (type === 'outline' &&
          'bg-white border-primary-light text-primary-light hover:bg-primary-light hover:text-white') ||
        (type === 'outline-gray' &&
          'bg-white border-natural-6 text-natural-6 hover:bg-natural-6 hover:text-white') ||
        (type === 'accent' &&
          'bg-accent border-accent text-white hover:bg-white hover:text-accent')
      } flex justify-center items-center gap-2 w-full h-full px-8 py-4 font-medium rounded-md border-[1px] ${className}`}
    >
      {icon && (
        <span>
          <Image
            src={icon}
            alt=""
            width={20}
            height={20}
            className="fill-white group-hover:invert"
            style={{ color: 'white', fill: 'white' }}
          />
        </span>
      )}
      <span>{label}</span>
    </button>
  );
}
