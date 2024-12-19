import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-300 p-4 rounded">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/images/logo.png"
                alt="Rotary Club of Bonny Island Logo" 
                width={300}
                height={300}
              />
            </Link>
            <p className="text-sm text-gray-700 break-words">Chartered in 2020</p>
            <Image 
              src="/images/theme-logo.png"
              alt="The Magic of Rotary Logo" 
              width={150}
              height={150}
              className="mt-2 w-full h-auto object-contain"
            />
          </div>
          <div className="bg-[#d9c89e] p-4 rounded">
            <h4 className="text-black font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Join Us', 'Donate', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-700 hover:text-white transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#b9d9eb] p-4 rounded">
            <h4 className="text-black font-semibold mb-4">Contact Us</h4>
            <address className="text-sm text-gray-700 not-italic break-words">
              <p>Atlantic Sterling Hotel, After Finima Military Checkpoint, Bonny Island</p>
              <p>Rivers State, Nigeria</p>
              <p className="mt-2">Email: rotaryclubofbonnyisland@gmail.com</p>
              <p>Phone: +234 903 886 8743</p>
              {/* <p>Phone: +234 814 577 9559</p> */}
            </address>
          </div>
          <div className="bg-[#f7a81b] p-4 rounded">
            <h4 className="text-lg font-semibold mb-4 text-black">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/groups/1192456801270933' },
                { icon: Instagram, label: 'Instagram', href:'https://www.instagram.com/rotary.club.bonnynlng' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-black hover:text-gray-700 transition duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-600 text-center text-sm text-gray-900">
          <p>&copy; {new Date().getFullYear()} </p>
          <p className="mt-2 text-sm">
            <a 
              href="https://www.promereoltd.com/our-offerings" 
              className="text-blue-600 font-medium transition duration-300 hover:bg-blue-100 hover:text-blue-800 px-2 py-1 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              DigiSigned by D; Promereo Services Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
