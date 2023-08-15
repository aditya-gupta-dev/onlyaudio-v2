import { useEffect } from "react";

export default function NavBar({currentTheme, setCurrentTheme}) {

    const toggleTheme = () => {
        if(currentTheme === 'light') {
            setCurrentTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setCurrentTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <div className='sticky top-0 w-full'>
            <div className='navbar sticky bg-base-300'>
                <a className='btn btn-ghost normal-case text-2xl font-bold'>Only Audio</a>
                <div className='navbar-end'>
                    <button className='btn btn-circle shadow-2xl' onClick={toggleTheme}>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='#ffffff' width='32' height='32' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M4 6h16M4 12h16M4 18h7'/>
                        </svg>
                    </button>
                </div>
            </div> 
        </div>
    );
}