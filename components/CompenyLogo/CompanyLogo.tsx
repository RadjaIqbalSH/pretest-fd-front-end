import React from "react";
import Link from "next/link";
import Image from "next/image";

export const CompanyLogo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <Image src={"/logo/fd-logo.png"} width={180} height={50} alt="Company Logo" />
      </a>
    </Link>
  );
};
