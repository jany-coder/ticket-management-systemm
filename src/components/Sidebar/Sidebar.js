import SideMenuItem from './SideMenuItem';

const Sidebar = () => {
    const menuItems = [
        { title: 'Dashboard', icon: <i class="fa-solid fa-chart-line"></i>, link: '/profile' },
        { title: 'My Tickets', icon: <i class="fa-solid fa-ticket"></i>, link: '/profile' },
        { title: 'My Profile', icon: <i class="fa-regular fa-user"></i>, link: '/profile' },
        { title: 'My Users', icon: <i class="fa-solid fa-users"></i>, link: '/profile' },
        { title: 'My Assets', icon: <i class="fa-solid fa-desktop"></i>, link: '/profile' },
        { title: 'My Tickets Type', icon: <i class="fa-regular fa-clipboard"></i>, link: '/' },
        { title: 'Tickets Queue', icon: <i class="fa-solid fa-file"></i>, link: '/profile' },
    ];
    return (
        <div className='w-64 bg-blue-950 min-h-screen h-full absolute'>
            <div className='p-4 text-white text-3xl font-bold'>DEMO LOGO</div>
            <ul className='flex flex-col gap-4 p-2 text-gray-400 text-xl'>
                {
                    menuItems.map((item, index) => <SideMenuItem key={index} item={item}></SideMenuItem>)
                }
            </ul>
        </div>
    );
};

export default Sidebar;