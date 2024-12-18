'use client';

import { useState } from 'react';
import Image from 'next/image';

export function LogoWithFallback() {
  const [error, setError] = useState(false);

  return (
    <div className="relative">
      {error ? (
        <span className="text-xl font-bold">The Martec</span>
      ) : (
        <Image
          src="/logo.svg"
          alt="The Martec"
          width={120}
          height={40}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
