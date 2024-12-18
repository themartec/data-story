import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  href?: string;
}

export function Logo({ className, href = '/' }: LogoProps) {
  const logo = (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="The Martec"
        width={40}
        height={40}
        className="dark:invert" // If want logo to invert in dark mode
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-75 transition-opacity">
        {logo}
      </Link>
    );
  }

  return logo;
}
