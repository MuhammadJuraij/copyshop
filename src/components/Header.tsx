import { useState } from 'react'; 
import PersonIcon from '@mui/icons-material/Person'; 
import SearchIcon from '@mui/icons-material/Search'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close'; 
import { Link } from 'react-router-dom';  

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [active, setActive] = useState('home');
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    return (
        <div className='bg-gray-200 sticky top-0 z-50'>
            <div className='flex justify-between items-center mx-5 md:mx-10 py-5'>
                <div className="font-sans font-medium text-4xl tracking-tight text-gray-800 flex items-center justify-center">
                    M<span className="font-medium">Store</span>
                    <span className="text-green-400">.</span>
                </div>
                
                {/* Desktop Nav */}
                <ul className='hidden md:flex justify-center space-x-10 items-center'>
                    {
                        ['home', 'store', 'about'].map((item) => (
                            <li key={item}>
                                <Link to={item === 'home' ? '/' : `/${item}`}
                                onClick={() => setActive(item)}
                                className={`uppercase hover:text-green-400 transition-colors duration-300 cursor-pointer
                                 ${active === item ? 'text-green-400' : 'text-gray-600'}`}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                
                {/* Icons */}
                <div className='flex items-center space-x-5'>
                    <div className='hidden md:block'>
                        <SearchIcon className='text-black' />
                    </div>
                    <PersonIcon className='text-black' />
                    <ShoppingCartIcon className='text-black' />
                    
                    {/* Mobile Menu Toggle with rotation animation */}
                    <div 
                        className='md:hidden cursor-pointer transform transition-transform duration-500 ease-in-out flex items-center justify-center'
                        onClick={toggleMobileMenu}
                    >
                        <div className={`transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile Nav with improved animation */}
            <div 
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{
                    transitionProperty: 'max-height, opacity',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                <ul className='flex flex-col space-y-4 px-5 pb-5 transform transition-transform duration-500 ease-out'>
                    {
                        ['home', 'store', 'about'].map((item, index) => (
                            <li 
                                key={item}
                                style={{
                                    transitionDelay: `${isMobileMenuOpen ? index * 100 : 0}ms`,
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                                    transition: 'opacity 400ms ease, transform 400ms ease'
                                }}
                            >
                                <Link to={item === 'home' ? '/' : `/${item}`}
                                onClick={() => {
                                    setActive(item);
                                    setIsMobileMenuOpen(false); // Close menu after selection
                                }}
                                className={`uppercase hover:text-green-400 transition-colors duration-300 cursor-pointer flex justify-center
                                 ${active === item ? 'text-green-400' : 'text-gray-600'}`}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    ); 
};  

export default Header;