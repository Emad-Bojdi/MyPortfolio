
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
        url: 'portfolio'
    },
    {
        title: 'PROJECT DETAILS',
        url: 'project-details'
    },
    {
        title: 'ELEMENTS',
        url: 'elements'
    }
    ]
},
{
    title: 'BLOGS',
    url: '/blog',
    submenu: [{
        title: 'BLOG',
        url: 'blog'
    },
    {
        title: 'BLOG DETAILS',
        url: 'blog-details'
    }

    ]
},
{
    title: 'CONTACT',
    url: '/contact'
},

]

export default MenuItemsData;