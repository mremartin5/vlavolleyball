const vlaData = {
    teams: [
        { name: 'Ascension', fullName: 'Phoenix Ascension', linkName: 'ascension' },
        { name: 'Icemen', fullName: 'Chicago Icemen', linkName: 'icemen' },
        { name: 'Team LVC', fullName: 'New York Legion Volleyball Club', linkName: 'lvc' },
        { name: 'Pineapple', fullName: 'Indiana Pineapple', linkName: 'pineapple' },
        { name: 'Rising Tide', fullName: 'Southern California Rising Tide', linkName: 'risingtide' }
    ],
    partners: [
        { name: 'usav', fullName: 'USA Volleyball' },
        { name: 'jva', fullName: 'Junior Volleyball Association' },
        { name: 'aau', fullName: 'Amatuer Atheltic Union' },
        { name: 'avca', fullName: 'American Volleyball Coaches Association' },
        { name: 'swishlive', fullName: 'Swish Live' }
    ],
    sponsors: [
        { name: 'mikasa' },
        { name: 'smack' }
    ],
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
    ],
    slides : [
        { hd: 'Ascension', subHd: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', imgName: 'ascension' },
        { hd: 'Icemen', subHd: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', imgName: 'icemen' },
        { hd: 'Team LVC', subHd: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', imgName: 'lvc' },
        { hd: 'Pineapple', subHd: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', imgName: 'pineapple' },
        { hd: 'Rising Tide', subHd: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', imgName: 'risingtide' },
    ],
    footer: [
        { name: 'instagram', url: 'https://www.instagram.com/vlavolleyball' },
        { name: 'facebook', url: 'https://www.facebook.com/102086257862810' },
        { name: 'youtube', url: 'https://www.youtube.com/channel/UCyfo_6gkwXKdRWO5_eD4Q6w' },
        { name: 'twitter', url: 'https://twitter.com/vlavolleyball' }
    ],
    events: [
        {
            name: 'JVA World Challenge',
            location: 'Louisville, KY',
            dates: 'April 4-5, 2020',
            matches: [
                {
                    date: '2020-04-04',
                    times: [
                        {
                            time: '10:00AM',
                            teams: [
                                { name: 'Pineapple', imgName: 'pineapple' },
                                { name: 'Ascenion', imgName: 'ascension' }
                            ]
                        },
                        {
                            time: '1:00PM',
                            teams: [
                                { name: 'Pineapple', imgName: 'pineapple' },
                                { name: 'Icemen', imgName: 'icemen' }
                            ]
                        },
                        {
                            time: '4:00PM',
                            teams: [
                                { name: 'Icemen', imgName: 'icemen' },
                                { name: 'Ascenion', imgName: 'ascension' }
                            ]
                        }
                    ]
                },
                {
                    date: '2020-04-05',
                    times: [
                        {
                            time: '9:00AM',
                            teams: [
                                { name: 'Pineapple', imgName: 'pineapple' },
                                { name: 'Ascenion', imgName: 'ascension' }
                            ]
                        },
                        {
                            time: '12:00PM',
                            teams: [
                                { name: 'Icemen', imgName: 'icemen' },
                                { name: 'Ascenion', imgName: 'ascension' }
                            ]
                        }
                    ]
                }
            ]
            
        },
        {
            name: 'JVA SummerFest',
            location: 'Columbus, OH',
            dates: 'June 6-7, 2020',
            matches: [
                {
                    date: '2020-06-06',
                    times: [
                        {
                            time: '10:00AM',
                            teams: [
                                { name: 'Team LVC', imgName: 'lvc' },
                                { name: 'Rising Tide', imgName: 'risingtide' }
                            ]
                        },
                        {
                            time: '1:00PM',
                            teams: [
                                { name: 'Icemen', imgName: 'icemen' },
                                { name: 'Rising Tide', imgName: 'risingtide' }
                            ]
                        },
                        {
                            time: '4:00PM',
                            teams: [
                                { name: 'Team LVC', imgName: 'lvc' },
                                { name: 'Icemen', imgName: 'icemen' }
                            ]
                        }
                    ]
                },
                {
                    date: '2020-06-07',
                    times: [
                        {
                            time: '9:00AM',
                            teams: [
                                { name: 'Team LVC', imgName: 'lvc' },
                                { name: 'Rising Tide', imgName: 'risingtide' }
                            ]
                        },
                        {
                            time: '12:00PM',
                            teams: [
                                { name: 'Team LVC', imgName: 'lvc' },
                                { name: 'Icemen', imgName: 'icemen' }
                            ]
                        }
                    ]
                }
            ]
            
        }
    ]
}
export default vlaData;