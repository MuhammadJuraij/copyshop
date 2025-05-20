

import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';


const footer = () => {
  const links = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SHOP', href: '/shop' },
    { name: 'BLOGS', href: '/blogs' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <div>

    
    <div className='flex justify-between flex-wrap   mx-auto px-12 py-10'>

      <div className="flex flex-col items-start max-w-sm p-6 flex-1">
        <h1 className="text-3xl font-medium text-gray-800 mb-5">MStore.</h1>

        <p className="text-gray-400 mb-6">
          Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
          Gravida massa volutpat aenean odio erat nullam fringilla.
        </p>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
            <Youtube size={20} />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center  p-6 flex-1">
        <h2 className="text-xl font-medium text-gray-800 mb-6">QUICK LINKS</h2>

        <nav className="flex flex-col space-y-4 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>


      <div>
        <div className="flex flex-col items-center max-w-sm p-6 flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">CONTACT US</h2>

          <p className="text-gray-400 mb-2 text-center">
            Do you have any queries or suggestions?
          </p>

          <div className="flex items-center mb-4">
            <a href="mailto:yourinfo@gmail.com" className="text-gray-800 font-medium hover:underline">
              mcopyoffial@gmail.com
            </a>
          </div>

          <p className="text-gray-400 mb-2 text-center">
            If you need support? Just give us a call.
          </p>

          <div className="flex items-center">
            <a href="tel:+551112223334" className="text-gray-800 font-medium hover:underline">
              +55 111 222 333 44
            </a>
          </div>
        </div>
      </div>
    </div>

   
    <hr className="w-full border-t border-gray-300" />
    <div className="flex justify-center items-center py-6">
     
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} MStore. All rights reserved.
      </p>
    </div>


    </div>
  )
}

export default footer
