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
      en: "StreamSports99",
      es: "StreamSports99",
    },
    url: "https://streamsports99.ru",
    description: {
      en: "High-quality sports streams from multiple countries.",
      es: "Streams deportivos de alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    featured: true,
    image: "/cards/sports1.jpg",
  },
  {
    id: "2",
    title: {
      en: "NTV.cx",
      es: "NTV.cx",
    },
    url: "https://ntv.cx",
    description: {
      en: "High-quality sports streams, primarily in English.",
      es: "Streams deportivos de alta calidad, principalmente en inglés.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports2.jpg",
    featured: true,
  },
  {
    id: "3",
    title: {
      en: "Streamed",
      es: "Streamed",
    },
    url: "https://streamed.pk",
    description: {
      en: "High-quality sports streams from multiple countries.",
      es: "Streams deportivos de alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports3.jpg",
  },
  {
    id: "4",
    title: {
      en: "Daddylive",
      es: "Daddylive",
    },
    url: "https://dlstreams.top",
    description: {
      en: "High-quality sports streams from multiple countries.",
      es: "Streams deportivos de alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports4.jpg",
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
      en: "High-quality sports streams from multiple countries.",
      es: "Streams deportivos de alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports5.jpg",
  },
  {
    id: "6",
    title: {
      en: "WatchSports",
      es: "WatchSports",
    },
    url: "https://watchsports.to",
    description: {
      en: "High-quality sports streams from multiple countries.",
      es: "Streams deportivos de alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports6.jpg",
  },
  {
    id: "7",
    title: {
      en: "Bintv",
      es: "Bintv",
    },
    url: "https://www.bintv.net",
    description: {
      en: "High-quality sports streams from multiple countries.",
      es: "Streams deportivos de alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports7.jpg",
  },
  {
    id: "8",
    title: {
      en: "WatchFooty",
      es: "WatchFooty",
    },
    url: "https://watchfooty.st/en",
    description: {
      en: "High-quality sports streams from multiple countries.",
      es: "Streams deportivos de alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports8.jpg",
  },
  {
    id: "9",
    title: {
      en: "TV.moviebite",
      es: "TV.moviebite",
    },
    url: "https://tv.moviebite.cc/",
    description: {
      en: "High-quality sports streams from multiple countries.",
      es: "Streams deportivos de alta calidad de varios países.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports9.jpg",
  },
  {
    id: "10",
    title: {
      en: "FutbolLibre",
      es: "FutbolLibre",
    },
    url: "https://futbollibres.net",
    description: {
      en: "High-quality sports streams, primarily in Spanish.",
      es: "Streams deportivos de alta calidad, principalmente en español.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports10.jpg",
  },
  {
    id: "11",
    title: {
      en: "RojaDirecta",
      es: "RojaDirecta",
    },
    url: "https://www.rojadirectatv3.pl",
    description: {
      en: "High-quality sports streams, primarily in Spanish.",
      es: "Streams deportivos de alta calidad, principalmente en español.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports11.jpg",
  },
  {
    id: "12",
    title: {
      en: "Superstrim",
      es: "Superstrim",
    },
    url: "https://superstrim.pages.dev",
    description: {
      en: "High-quality sports streams, primarily in English.",
      es: "Streams deportivos de alta calidad, principalmente en inglés.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports12.jpg",
  },
  {
    id: "13",
    title: {
      en: "Footstreams",
      es: "Footstreams",
    },
    url: "https://footstreams.xyz/",
    description: {
      en: "High-quality sports streams, primarily in English.",
      es: "Streams deportivos de alta calidad, principalmente en inglés.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports13.jpg",
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
  },
  {
    id: "15",
    title: {
      en: "EliteGol",
      es: "EliteGol",
    },
    url: "https://elitegol.lol/",
    description: {
      en: "High-quality sports streams, primarily in Spanish.",
      es: "Streams deportivos de alta calidad, principalmente en español.",
    },
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports15.jpg",
  },
  {
    id: "16",
    title: {
      en: "Cinemacity",
      es: "Cinemacity",
    },
    url: "https://cinemacity.cc",
    description: {
      en: "High-quality movie, TV, and anime streaming sources [DUB + SUB].",
      es: "Fuentes de streaming de películas, TV y anime en alta calidad [DUB + SUB].",
    },
    category: "movies-tv-shows",
    tags: ["movies", "tv shows", "anime"],
    image: "/cards/movies1.jpg",
  },
  {
    id: "17",
    title: {
      en: "Showbox",
      es: "Showbox",
    },
    url: "https://www.showbox.media/",
    description: {
      en: "High-quality movie and TV streaming sources [SUB].",
      es: "Fuentes de streaming de películas y TV en alta calidad [SUB].",
    },
    category: "movies-tv-shows",
    tags: ["movies", "tv shows"],
    image: "/cards/movies2.jpg",
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