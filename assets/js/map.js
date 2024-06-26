const locations = [{
        lat: 45.81444,
        lng: 15.97798,
        name: "Zagreb",
    },
    {
        lat: 46.056946,
        lng: 14.505751,
        name: "Ljubljana",
    },
    {
        lat: 47.497913,
        lng: 19.040236,
        name: "Budapest",
    },
    {
        lat: 48.210033,
        lng: 16.363449,
        name: "Vienna",
    },
    {
        lat: 52.520008,
        lng: 13.404954,
        name: "Berlin",
    },
]


const mapStyle = [{
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#ffffff",
        }, ],
    },
    {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{
                visibility: "on",
            },
            {
                color: "#3e606f",
            },
            {
                weight: 2,
            },
            {
                gamma: 0.84,
            },
        ],
    },
    {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off",
        }, ],
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{
                weight: 0.6,
            },
            {
                color: "#313536",
            },
        ],
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
            color: "#44a688",
        }, ],
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#13876c",
        }, ],
    },
    {
        featureType: "poi.attraction",
        elementType: "geometry.stroke",
        stylers: [{
                color: "#f5e4e4",
            },
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.attraction",
        elementType: "labels",
        stylers: [{
                visibility: "on",
            },
            {
                lightness: "14",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
                color: "#13876c",
            },
            {
                visibility: "simplified",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
                color: "#067372",
            },
            {
                lightness: "-20",
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
            color: "#357374",
        }, ],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            color: "#004757",
        }, ],
    },
]

export {
    locations,
    mapStyle
}