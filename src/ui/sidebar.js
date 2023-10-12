import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (  
        <div className='md:w-2/5 xl:w-1/5 bg-[#121f3d]'>
            <div className='p-6 '>
                <p className='uppercase text-white text-2xl tracking-wide text-center font-bold'>UNDERGOLD</p>
                <p className='mt-3 text-gray-600'>Administra tu GIMNASIO en las siguientes opciones:</p>
                <nav className='mt-10'>
                    <NavLink className="p-1 text-[#98ca3f] font-bold block hover:bg-[#98ca3f] hover:text-[#121f3d] " exact='true' to="/">Inicio</NavLink>
                    <NavLink className="p-1 text-[#98ca3f] font-bold block hover:bg-[#98ca3f] hover:text-[#121f3d]" exact='true' to="/register-user">Registro Usuario</NavLink>
                    <NavLink className="p-1 text-[#98ca3f] font-bold block hover:bg-[#98ca3f] hover:text-[#121f3d]" exact='true' to="/register-class">Registro Rutina</NavLink>
                </nav>
            </div>
        </div>
    );
}
 
export default Sidebar;