
import React from 'react';
import Link from 'next/link';

const navbar = () => {
    return(
       <main  className='bg-blue-900'>
        <nav  className='flex justify-between items-center w-[95%]'>
        <div className='text-4xl text-white text-bold leading-1 p-4 font-bold'><Link href="/">MyWebsite</Link>
            </div>
        <div>
            <ul className='text-white flex items-center gap-8 text-right font-semibold'>
            <li>
                <Link className='hover:text-black text-right ' href="/"><button className='hover:bg-slate-300 rounded hover:rounded-lg hover:py-2 hover:px-2 '>Home</button></Link><br/>
                </li>
                <li>
                <Link className='hover:text-black' href="/About"><button className='hover:bg-slate-300 rounded hover:rounded-lg hover:py-2 hover:px-2'>About</button></Link><br/>
                </li>
                <li>
                <Link className='hover:text-black' href="/Jobs"><button className='hover:bg-slate-300 rounded hover:rounded-lg hover:py-2 hover:px-2'>Jobs</button></Link><br/>
                </li>
                <li>
                <Link className='hover:text-black' href="/Jobs/programming"><button className='hover:bg-slate-300 rounded hover:rounded-lg hover:py-2 hover:px-2'>Programming</button></Link><br/>
                </li>
                <li>
                <Link className='hover:text-black' href="/contact"><button className='hover:bg-slate-300 rounded hover:rounded-lg hover:py-2 hover:px-2'>Contact Us</button></Link><br/>
                </li>
                
                
                
            </ul>
        
    
        </div>

        </nav>
        
       </main>
    )
}

export default navbar;




