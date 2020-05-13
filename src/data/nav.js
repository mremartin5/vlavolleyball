const dataNav = {
    nav: [
        { name: 'home', linkName: '/' },
        { name: 'schedule', linkName: '/schedule' },
        { name: 'teams', subLinks: [
                { name: 'ascension', linkName: '/teams/ascension' },
                { name: 'icemen', linkName: '/teams/icemen' },
                { name: 'team lvc', linkName: '/teams/lvc' },
                { name: 'pineapple', linkName: '/teams/pineapple' },
                { name: 'rising tide', linkName: '/teams/risingtide' }
            ]
        },
        { name: 'media', subLinks: [
                { name: 'photo gallery', linkName: '/media/photogallery' },
                { name: 'vla youtube', linkName: '/media/vlayoutube' }
            ]
        },
        { name: 'contact us', linkName: '/contactus' },
        { name: 'management team', linkName: '/managementteam' },
        { name: 'more', subLinks: [
                { name: 'photo gallery', linkName: '/media/photogallery' },
                { name: 'vla youtube', linkName: '/media/vlayoutube' }
            ]
        },
    ]
}
export default dataNav;