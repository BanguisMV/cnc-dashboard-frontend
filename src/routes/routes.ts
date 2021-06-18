import { FaTachometerAlt,FaUsersCog,FaFolderOpen,FaUserAlt } from "react-icons/fa";

type Route = {
    path:string;
    name:string;
    icon?:any;
    role:string[];
}


export const Routes:Route[] = [
    {
        path: '/admin/dashboard',
        name: 'Dashboard',
        icon: FaTachometerAlt,
        role: ['ADMIN'],
    },
    {
        path: '/admin/projects',
        name: 'Projects',
        icon: FaFolderOpen,
        role: ['ADMIN'],
    },
    {
        path: '/admin/developers',
        name: 'Developers',
        icon: FaUsersCog,
        role: ['ADMIN'],
    },
    {
        path: '/developer/dashboard',
        name: 'Dashboard',
        icon: FaTachometerAlt,
        role: ['DEVELOPER'],
    },
    {
        path: '/developer/projects',
        name: 'Projects',
        icon: FaFolderOpen,
        role: ['DEVELOPER'],
    },
    {
        path: '/developer/profile',
        name: 'Profile',
        icon: FaUserAlt,
        role: ['DEVELOPER'],
      },


]
