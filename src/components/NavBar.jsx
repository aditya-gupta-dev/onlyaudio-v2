import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <div className='sticky top-0 w-full'>
            <div className='navbar sticky bg-base-300'>
                <a className='btn btn-ghost normal-case text-2xl font-bold'>Only Audio</a>
                <div className='navbar-end'>
                    <Link to="/settings" className="btn btn-circle shadow-2xl">
                        <svg xmlns='http://www.w3.org/2000/svg' fill='#ffffff' width='32' height='32' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M4 6h16M4 12h16M4 18h7'/>
                        </svg>
                    </Link>
                </div>
            </div> 
        </div>
    );
}
