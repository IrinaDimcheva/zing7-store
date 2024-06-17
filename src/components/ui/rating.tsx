import Image from 'next/image';

export default function Rating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Image
          key={i}
          src="./icons/star.svg"
          alt="star"
          width={16}
          height={16}
        />
      ))}
    </div>
  );
}
