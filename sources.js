const availableSources = [
    {
        id: 'pstream',
        name: 'P-Stream',
        isFrench: false,
        urls: {
            movie: 'https://iframe.pstream.mov/media/tmdb-movie-{id}',
            tv: 'https://iframe.pstream.mov/media/tmdb-tv-{id}/{season}/{episode}'
        }
    },
    {
        id: '123embed',
        name: '123Embed',
        isFrench: false,
        urls: {
            movie: 'https://play2.123embed.net/movie/{id}',
            tv: 'https://play2.123embed.net/tv/{id}/{season}/{episode}'
        }
    },
    {
        id: 'videasy',
        name: 'VidEasy (4K)',
        isFrench: false,
        urls: {
            movie: 'https://player.videasy.net/movie/{id}?color=8834ec',
            tv: 'https://player.videasy.net/tv/{id}/{season}/{episode}?color=8834ec'
        }
    },
    {
        id: 'vidfast',
        name: 'VidFast (4K)',
        isFrench: false,
        urls: {
            movie: 'https://vidfast.pro/movie/{id}',
            tv: 'https://vidfast.pro/tv/{id}/{season}/{episode}'
        }
    },
    {
        id: 'vidify',
        name: 'Vidify',
        isFrench: false,
        urls: {
            movie: 'https://vidify.top/embed/movie/{id}',
            tv: 'https://vidify.top/embed/tv/{id}/{season}/{episode}'
        }
    },
    {
        id: 'rive',
        name: 'RiveStream',
        isFrench: false,
        urls: {
            movie: 'https://rivestream.org/embed?type=movie&id={id}',
            tv: 'https://rivestream.org/embed?type=tv&id={id}&season={season}&episode={episode}'
        }
    },
    {
        id: 'nebula',
        name: 'NebulaFlix',
        isFrench: false,
        urls: {
            movie: 'https://nebulaflix.stream/movie?mt={id}&server=1',
            tv: 'https://nebulaflix.stream/show?st={id}&season={season}&episode={episode}&server=1'
        }
    },
    {
        id: 'vidzee',
        name: 'VidZee',
        isFrench: false,
        urls: {
            movie: 'https://player.vidzee.wtf/embed/movie/{id}', // @ambr0sial: there is a 4K endpoint for movies only. in case you want to implement that sometime: https://player.vidzee.wtf/embed/movie/4k/{id}
            tv: 'https://player.vidzee.wtf/embed/tv/{id}/{season}/{episode}'
        }
    }
];
