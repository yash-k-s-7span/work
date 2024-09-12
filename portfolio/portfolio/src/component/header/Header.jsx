import React from 'react'
import Logo from '../../../public/assets/header/logo.svg';
import { AlignJustify} from 'lucide-react';

const Header = () => {
  return (     
        <header className='sticky top-0 z-10'>
             {/* Header Section */}
            <nav>
                <div className='lg:hidden flex justify-between items-center px-2 py-2'>
                    <a href="#">
                        <img src={Logo} alt="logo" className='w-10 h-10'/>
                    </a>
                    <a href="#"><AlignJustify className='text-white'/></a>
                </div>
                <div className='hidden lg:inline'>
                    <ul className='text-white lg:flex lg:gap-32 lg:justify-center lg:px-96 lg:pt-8'>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Work</li></a>
                        <img src={Logo} alt="logo" className='w-10 h-10'/>
                        <a href="#"><li>Resume</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
            </nav>
        </header>
  )
}

export default Header
