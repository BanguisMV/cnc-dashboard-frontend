type Route = {
    path:string;
    name:string;
    icon?:string;
    role:string[];
}


export const Routes:Route[] = [
    {
        path: '/developer/dashboard',
        name: 'Dashboard',
        icon: 'insights',
        role: ['developer'],
    },
    {
        path: '/developer/profile',
        name: 'Profile',
        icon: 'insights',
        role: ['developer'],
      },
    {
        path: '/developer/projects',
        name: 'Projects',
        icon: 'insights',
        role: ['developer'],
    },
    {
        path: '/developer/projects/:name',
        name: 'Project',
        icon: 'insights',
        role: ['developer'],
    },
]
