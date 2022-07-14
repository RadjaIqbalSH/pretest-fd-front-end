import Link from 'next/link';
import Image from 'next/image';

export const CompanyLogo = () => {
  return (
    <Link href="/" passHref>
      <a className="relative w-96 h-10 bg-red-200">
        <Image
          src={'/logo/fd-logo.png'}
          layout="fill"
          title="Female Daily"
          alt="Company Logo"
          objectFit="contain"
        />
      </a>
    </Link>
  );
};
