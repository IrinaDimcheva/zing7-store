'use client';

export default function Button({
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
          'bg-primary border-primary text-white hover:bg-white hover:text-primary') ||
        (type === 'outline' &&
          'bg-white border-primary-light text-primary-light hover:bg-primary-light hover:text-white') ||
        (type === 'outline-gray' &&
          'bg-white border-natural-6 text-natural-6 hover:bg-natural-6 hover:text-white') ||
        (type === 'accent' &&
          'bg-accent border-accent text-white hover:bg-white hover:text-accent')
      } w-full h-full px-8 py-4 font-medium rounded-md border-[1px] ${className}`}
    >
      {label}
    </button>
  );
}
