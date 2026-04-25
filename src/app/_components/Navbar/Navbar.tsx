'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TextAlignJustify } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { LinksPops } from '../../interface';
import MobileNav from '../mobileNav/MobileNav';
import { createClient } from '../../../../lib/supabase/client';
import { useRouter } from 'next/navigation';

const Navbar = ({ token }: { token: string | null }) => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    router.refresh();
  };
  const Links: LinksPops[] = [
    {
      name: 'Add project',
      href: '/',
    },
    {
      name: 'Edit project',
      href: '/EditProject',
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
        <li>
          <Link
            className={`${pathname === link.href ? 'active' : ''}`}
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      </ul>
    ));
  }, [Links]);
  return (
    <nav className="grid md:grid-cols-[auto_1fr_auto] grid-cols-[1fr_auto] items-center bg-[#0F172A] p-3 border-b border-white/5">
      <h1 className="logo text-18 font-bold text-white">Mostafa yahya</h1>
      <div
        className={`${token ? 'hidden md:flex' : 'hidden'} links  text-[#94A3B8] justify-center gap-10`}
      >
        {link}
      </div>
      {token ?
        <button
          className="md:block  hidden bg-button-color text-white px-4 py-1 rounded-md"
          onClick={handleLogout}
        >
          Sign Out
        </button>
      : <Link
          href="/signin"
          className="md:block ms-auto w-fit hidden bg-button-color text-white px-4 py-1 rounded-md"
        >
          Sign In
        </Link>
      }
      <TextAlignJustify
        onClick={() => setIsClicked(!isClicked)}
        className="block md:hidden text-white cursor-pointer"
      />
      {isClicked && (
        <div className="absolute  md:hidden top-14 left-0 w-full z-10">
          <MobileNav />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
