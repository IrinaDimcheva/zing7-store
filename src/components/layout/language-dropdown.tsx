'use client';

import Image from 'next/image';
import { international } from '@/data/data';
import { useState } from 'react';

export default function LanguageDropdown() {
  const [value, setValue] = useState('us');

  return (
    <div className="flex  items-center">
      <Image src={`./icons/${value}.svg`} alt={value} width={18} height={14} />
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none cursor-pointer p-1 text-natural-1"
      >
        {international.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
