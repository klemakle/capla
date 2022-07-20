const photos = [{
        image: require('@/assets/images/about/degree1.jpeg'),
        title: 'Céremonie de remise de diplômes'
    },
    {
        image: require('@/assets/images/about/remise1.jpeg'),
        title: 'Céremonie de remise de diplômes'
    },
    {
        image: require('@/assets/images/about/goree1.jpeg'),
        title: 'Sortie Gorée 2021'
    },
    {
        image: require('@/assets/images/about/classroom1.jpeg'),
        title: ''
    },
    {
        image: require('@/assets/images/about/degree1.jpeg'),
        title: 'Céremonie de remise de diplômes'
    }

]

const breakpoints = {
    1200: {
        slideRatio: 1 / 5
    },
    900: {
        slideRatio: 1 / 3
    },
    600: {
        slideRatio: 1 / 2,
        arrows: false,
        bulletsOutside: true
    },
    // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
    1100: {
        slideRatio: 1 / 4
    }
}

export {
    photos,
    breakpoints
}