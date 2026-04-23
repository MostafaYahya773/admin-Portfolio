'use client';
import React, { useMemo } from 'react';
import { LinksPops } from '../../interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const MobileNav = () => {
  const Links: LinksPops[] = [
    {
      name: 'Add project',
      href: '/',
    },
    {
      name: 'Edit project',
      href: '/edit-project',
    },
    {
      name: 'Delete Project',
      href: '/delete-project',
    },
  ];
  const link = useMemo(() => {
    const pathname = usePathname();
    return Links.map((link) => (
      <ul key={link.name}>
        <li className="w-full block">
          <Link
            className={`${pathname === link.href ? 'activemobile w-full block p-2' : ''}`}
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      </ul>
    ));
  }, [Links]);

  return (
    <div className="backdrop-blur-md bg-white/1 w-screen min-h-screen text-white ">
      <div className="flex flex-col gap-5 drop-shadow-md bg-bg-color p-1 py-3 rounded-lg">
        {link}
      </div>
    </div>
  );
};

export default MobileNav;
