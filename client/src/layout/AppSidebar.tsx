import { useSidebar } from '../context/SidebarContext';
import { Link } from 'react-router-dom';

const appSideBar = () => {
   const {isOpen, toggleSidebar} = useSidebar()
   const sidebarItems = [
      {
         path: '/',
         text: 'Genders',
      },
      {
         path: '/users',
         text: 'User List',
      },
   ]
  return (
    <>
    {isOpen && (
      <div className="fixed inset-0 z-30 bg-blur sm:hidden" 
           onClick={toggleSidebar} 
         />  
      )}
        <aside id="top-bar-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-full pt-16 transition-transform bg-gray-900 text-gray-300 ${!isOpen ? '-translate-x-full' : 'translate-x-0'} sm:translate-x-0`} aria-label="Sidebar">
           <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
              <ul className="space-y-2 font-medium ">
               {sidebarItems.map((sidebarItem, index) => (
                 <li key={index}>
                    <Link 
                        to={sidebarItem.path} 
                        className="flex items-center px-2 py-1.5 text-gray-300 rounded hover:bg-gray-800 hover:text-white">
                       <span className="ms-3">{sidebarItem.text}</span>
                    </Link>
                 </li>
               ))}

              </ul>
           </div>
        </aside>    
    </>
  )
}

export default appSideBar