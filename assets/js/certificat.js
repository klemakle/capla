const photos = [{
        image: require('@/assets/images/degree/degree0.jpg'),
        title: 'Céremonie de remise de diplômes'
    },
    {
        image: require('@/assets/images/degree/degree1.jpg'),
        title: 'Céremonie de remise de diplômes'
    },
    {
        image: require('@/assets/images/degree/degree2.jpg'),
        title: 'Sortie Gorée 2021'
    }

]

const breakpoints = {
    1200: {
        slideRatio: 1 / 6,
        arrows: false
    },
    900: {
        slideRatio: 1 / 3,
        arrows: false
    },
    600: {
        slideRatio: 6 / 10,
        arrows: false,
        bulletsOutside: true
    },
    // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
    1100: {
        slideRatio: 1 / 2,
        arrows: false
    }
}

export {
    photos,
    breakpoints
}