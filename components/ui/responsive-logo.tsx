import Image from 'next/image';

export function ResponsiveLogo() {
  return (
    <div className="relative">
      {/* Mobile */}
      <Image
        src="/images/logo-mobile.svg"
        alt="The Martec"
        width={80}
        height={30}
        className="md:hidden"
      />
      {/* Desktop */}
      <Image src="/logo.svg" alt="The Martec" width={120} height={40} className="hidden md:block" />
    </div>
  );
}
