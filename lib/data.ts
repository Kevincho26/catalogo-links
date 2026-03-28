import type { Bookmark, Category } from "./types"

export const categories: Category[] = [
  {
    slug: "sports",
    name: {
      en: "Sports",
      es: "Deportes",
    },
    description: {
      en: "Live sports, highlights, and useful resources.",
      es: "Deportes en vivo, momentos destacados y recursos útiles.",
    },
    bannerImage: "/banners/sports.jpg",
    image: "/categories/sports.jpg",
  },
  {
    slug: "movies-tv-shows",
    name: {
      en: "Movies & TV Shows",
      es: "Películas y series",
    },
    description: {
      en: "Movies, TV shows, and entertainment resources.",
      es: "Películas, series y recursos de entretenimiento.",
    },
    bannerImage: "/banners/movies-tv-shows.jpg",
    image: "/categories/movies-tv-shows.jpg",
  },
  {
    slug: "anime",
    name: {
      en: "Anime",
      es: "Anime",
    },
    description: {
      en: "Anime series, movies, and related resources.",
      es: "Series, películas y recursos relacionados con el anime.",
    },
    bannerImage: "/banners/anime.jpg",
    image: "/categories/anime.jpg",
  },
]

export const bookmarks: Bookmark[] = [
  {
    id: "1",
    title: {
      en: "FCTV33",
      es: "FCTV33",
    },
    url: "https://www.fctv33.com",
    description: {
      en: "High-quality streams from multiple countries.",
      es: "Streams en alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    featured: true,
    image: "/cards/sports1.jpg",
    availability: "en-es",
  },
  {
    id: "2",
    title: {
      en: "Sportora",
      es: "Sportora",
    },
    url: "https://sportora.ru/",
    description: {
      en: "High-quality streams in English.",
      es: "Streams en alta calidad en inglés.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports2.jpg",
    featured: true,
    availability: "en",
  },
  {
    id: "3",
    title: {
      en: "Streamed",
      es: "Streamed",
    },
    url: "https://streamed.pk",
    description: {
      en: "High-quality streams in English.",
      es: "Streams en alta calidad en inglés.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports3.jpg",
    availability: "en",
  },
  {
    id: "4",
    title: {
      en: "Daddylive",
      es: "Daddylive",
    },
    url: "https://dlstreams.top",
    description: {
      en: "High-quality streams from multiple countries.",
      es: "Streams en alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports4.jpg",
    availability: "en-es",
    featured: true,
  },
  {
    id: "5",
    title: {
      en: "SportyHunter",
      es: "SportyHunter",
    },
    url: "https://sportyhunter.fit",
    description: {
      en: "High-quality streams in English.",
      es: "Streams en alta calidad en inglés."
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports5.jpg",
    availability: "en",
  },
  {
    id: "6",
    title: {
      en: "WatchSports",
      es: "WatchSports",
    },
    url: "https://watchsports.to",
    description: {
      en: "High-quality streams in English.",
      es: "Streams en alta calidad en inglés.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports6.jpg",
    availability: "en",
  },
  {
    id: "7",
    title: {
      en: "StreamSports99",
      es: "StreamSports99",
    },
    url: "https://streamsports99.ru",
    description: {
      en: "Check the channel guide to find which channel is broadcasting the event you want to watch.",
      es: "Revisar el catálogo de canales para saber donde se transmite el evento deseado.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    featured: true,
    image: "/cards/sports7.jpg",
    availability: "en-es",
  },
  {
    id: "8",
    title: {
      en: "WatchFooty",
      es: "WatchFooty",
    },
    url: "https://watchfooty.st/en",
    description: {
      en: "High-quality streams in English.",
      es: "Streams en alta calidad en inglés."
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports8.jpg",
    availability: "en",
  },
  {
    id: "9",
    title: {
      en: "TV.moviebite",
      es: "TV.moviebite",
    },
    url: "https://tv.moviebite.cc/",
    description: {
      en: "High-quality streams from multiple countries.",
      es: "Streams en alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports9.jpg",
    availability: "en-es",
  },
  {
    id: "10",
    title: {
      en: "FutbolLibre",
      es: "FutbolLibre",
    },
    url: "https://futbollibres.net",
    description: {
      en: "High-quality streams in Spanish.",
      es: "Streams en alta calidad en español."
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports10.jpg",
    availability: "es",
  },
  {
    id: "11",
    title: {
      en: "RojaDirecta",
      es: "RojaDirecta",
    },
    url: "https://www.rojadirectatv3.pl",
    description: {
      en: "High-quality streams in Spanish.",
      es: "Streams en alta calidad en español."
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports11.jpg",
    availability: "es",
  },
  {
    id: "12",
    title: {
      en: "Superstrim",
      es: "Superstrim",
    },
    url: "https://superstrim.pages.dev",
    description: {
      en: "High-quality streams in English.",
      es: "Streams en alta calidad en inglés.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports12.jpg",
    availability: "en",
  },
  {
    id: "13",
    title: {
      en: "Footstreams",
      es: "Footstreams",
    },
    url: "https://footstreams.xyz/",
    description: {
      en: "High-quality streams in English.",
      es: "Streams en alta calidad en inglés.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports13.jpg",
    availability: "en",
  },
  {
    id: "14",
    title: {
      en: "Damitv",
      es: "Damitv",
    },
    url: "https://damitv.pro",
    description: {
      en: "High-quality sports streams, primarily in English.",
      es: "Streams deportivos de alta calidad, principalmente en inglés.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports14.jpg",
    availability: "en",
  },
  {
    id: "15",
    title: {
      en: "EliteGol",
      es: "EliteGol",
    },
    url: "https://elitegol.lol/",
    description: {
      en: "High-quality streams in Spanish.",
      es: "Streams en alta calidad en español."
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports15.jpg",
    availability: "es",
  },
  {
    id: "16",
    title: {
      en: "Cinemacity",
      es: "Cinemacity",
    },
    url: "https://cinemacity.cc",
    description: {
      en: "Only the latest releases, dubbing available in various languages..",
      es: "Solo los últimos estrenos, doblaje disponible en varios idiomas.",
    },
    category: "movies-tv-shows",
    tags: ["movies", "tv shows", "anime"],
    image: "/cards/movies1.jpg",
    availability: "dub-sub",
  },
  {
    id: "17",
    title: {
      en: "Showbox",
      es: "Showbox",
    },
    url: "https://www.showbox.media/",
    description: {
      en: "High-quality movie and TV streaming .",
      es: "Peliculas y series de alta calidad de streaming.",
    },
    category: "movies-tv-shows",
    tags: ["movies", "tv shows"],
    image: "/cards/movies2.jpg",
    availability: "sub",
  },
  {
    id: "18",
    title: {
      en: "Gnulahd.nu",
      es: "Gnulahd.nu",
    },
    url: "https://ww3.gnulahd.nu/",
    description: {
      en: "Movies and Tv shows, dubbed and subbed.",
      es: "Peliculas y series dobladas y subtituladas.",
    },
    category: "movies-tv-shows",
    tags: ["movies", "tv shows", "anime"],
    image: "/cards/movies3.jpg",
    availability: "dub-sub",
  },
  {
    id: "31",
    title: {
      en: "Uniquestream",
      es: "Uniquestream",
    },
    url: "https://anime.uniquestream.net/",
    description: {
      en: "High-quality anime streaming sources [DUB + SUB].",
      es: "Fuentes de streaming de anime en alta calidad [DUB + SUB].",
    },
    category: "anime",
    tags: ["anime"],
  },
]

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getBookmarksByCategory(slug: string) {
  return bookmarks.filter((bookmark) => bookmark.category === slug)
}

export function getFeaturedBookmarks() {
  return bookmarks.filter((bookmark) => bookmark.featured)
}