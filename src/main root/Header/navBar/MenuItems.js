
const MenuItemsData = [{
    title: 'HOME',
    url: '/'
},
{
    title: 'ABOUT',
    url: '/about'
},
{
    title: 'SERVICES',
    url: '/services'
},
{
    title: 'PAGES',
    url: '/pages',
    submenu: [{
        title: 'PORTFOLIO',
        url: 'portfolio',
        key:0,
    },
    {
        title: 'PROJECT DETAILS',
        url: 'project-details',
        key:1,
    },
    {
        title: 'ELEMENTS',
        url: 'elements',
        key:2,
    }
    ]
},
{
    title: 'BLOGS',
    url: '/blog',
    submenu: [{
        title: 'BLOG',
        url: 'blog',
        key:0,
    },
    {
        title: 'BLOG DETAILS',
        url: 'blog-details',
        key:1,
    }

    ]
},
{
    title: 'CONTACT',
    url: '/contact'
},

]

export default MenuItemsData;