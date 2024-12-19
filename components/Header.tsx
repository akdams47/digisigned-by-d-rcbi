'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },

  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Donate', href: '/donate' },
];

const dropdownItems = [
  { name: 'Gallery', href: '/gallery' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const checkViewport = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', checkViewport);
    window.addEventListener('resize', checkViewport);

    checkViewport();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const handleMoreClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (
      isDropdownOpen && 
      event.target instanceof Element && 
      !event.target.closest('.relative')
    ) {
      setIsDropdownOpen(false);
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]); 
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-2">
          {/* Logo Container */}
          <Link href="/" className={`flex items-center gap-4 relative h-full ${pathname === '/' ? 'border-b-2 border-rotary-blue' : ''}`}>
            <div className="relative w-[250px] h-[50px] flex items-center">
              <Image
                src="/images/logo.png"
                alt="Rotary Club of Bonny Island Logo"
                width={250}
                height={50}
                priority
                quality={100}
                className="object-contain w-full h-full"
                layout="responsive"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 relative"> {/* Reduced gap here */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors rounded-full px-4 py-2 ${
                  isScrolled
                    ? 'text-gray-600 hover:bg-[#ff7600] hover:text-white'
                    : 'text-rotary-blue hover:bg-[#ff7600]'
                } ${
                  item.name === 'Donate'
                    ? 'bg-[#b9d9eb] hover:bg-[#ff7600] text-blue'
                    : ''
                } ${
                  pathname === item.href ? 'border-b-2 border-rotary-blue' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative">
              <button
                className={`font-medium transition-colors rounded-full px-4 py-2 ${
                  isScrolled 
                    ? 'text-gray-600 hover:bg-[#ff7600] hover:text-white' 
                    : 'text-rotary-blue hover:bg-[#ff7600]'
                } ${
                  dropdownItems.some(item => pathname === item.href) ? 'border-b-2 border-rotary-blue' : ''
                }`}
                onClick={handleMoreClick} 
              >
                 <ChevronDown className="inline h-4 w-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                        pathname === item.href ? 'border-b-2 border-rotary-blue' : ''
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/membership"
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                isScrolled
                  ? 'bg-rotary-blue text-white hover:bg-[#ff7600]'
                  : 'bg-rotary-gold text-rotary-dark-blue hover:bg-opacity-90'
              } ${
                pathname === '/membership' ? 'border-b-2 border-rotary-blue' : ''
              }`}
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || isMenuOpen
                ? 'text-rotary-blue hover:bg-gray-100'
                : 'text-rotary-dark-blue hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} color="red" />
            ) : (
              <Menu size={24} color="blue" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 text-gray-600 hover:text-rotary-blue ${
                    pathname === item.href
                      ? 'font-bold text-rotary-blue border-b-2 border-rotary-blue'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative">
                <button
                  className={`block w-full text-left py-3 text-gray-600 hover:text-rotary-blue ${
                    dropdownItems.some(item => pathname === item.href) ? 'border-b-2 border-rotary-blue' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMoreClick();
                  }}
                >
                  More <ChevronDown className="inline h-4 w-4 ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                          pathname === item.href ? 'border-b-2 border-rotary-blue' : ''
                        }`}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/membership"
                className={`block mt-4 px-4 py-3 bg-rotary-blue text-white text-center rounded-full hover:bg-rotary-light-blue transition-colors ${
                  pathname === '/membership' ? 'border-b-2 border-rotary-blue' : ''
                }`}
              >
                Join Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
