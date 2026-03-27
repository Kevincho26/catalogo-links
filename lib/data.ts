import type { Bookmark, Category } from "./types"

export const categories: Category[] = [
  {
    slug: "sports",
    name: "Sports",
    description: "Live sports, highlights, and useful resources.",
    bannerImage: "/banners/sports.jpg",
    image: "/categories/sports.jpg",
  },
  {
    slug: "movies-tv-shows",
    name: "Movies & TV Shows",
    description: "Movies, TV shows, and entertainment resources.",
    bannerImage: "/banners/movies-tv-shows.jpg",
    image: "/categories/movies-tv-shows.jpg",
  },
  {
    slug: "anime",
    name: "Anime",
    description: "Anime series, movies, and related resources.",
    bannerImage: "/banners/anime.jpg",
    image: "/categories/anime.jpg",
  },
]

export const bookmarks: Bookmark[] = [
  {
    id: "1",
    title: "StreamSports99",
    url: "https://streamsports99.ru",
    description: "High-quality sports streams from multiple countries.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    featured: true,
    image: "/cards/sports1.jpg",
  },
  {
    id: "2",
    title: "NTV.cx",
    url: "https://ntv.cx",
    description: "High-quality sports streams, primarily in English.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports2.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Streamed",
    url: "https://streamed.pk",
    description: "High-quality sports streams from multiple countries.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports3.jpg",
  },
  {
    id: "4",
    title: "Daddylive",
    url: "https://dlstreams.top",
    description: "High-quality sports streams from multiple countries.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports4.jpg",
    featured: true,
  },
  {
    id: "5",
    title: "SportyHunter",
    url: "https://sportyhunter.fit",
    description: "High-quality sports streams from multiple countries.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports5.jpg",
  },
  {
    id: "6",
    title: "WatchSports",
    url: "https://watchsports.to",
    description: "High-quality sports streams from multiple countries.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports6.jpg",
  },
  {
    id: "7",
    title: "Bintv",
    url: "https://www.bintv.net",
    description: "High-quality sports streams from multiple countries.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports7.jpg",
  },
  {
    id: "8",
    title: "WatchFooty",
    url: "https://watchfooty.st/en",
    description: "High-quality sports streams from multiple countries.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports8.jpg",
  },
  {
    id: "9",
    title: "TV.moviebite",
    url: "https://tv.moviebite.cc/",
    description: "High-quality sports streams from multiple countries.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports9.jpg",
  },
  {
    id: "10",
    title: "FutbolLibre",
    url: "https://futbollibres.net",
    description: "High-quality sports streams, primarily in Spanish.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports10.jpg",
  },
  {
    id: "11",
    title: "RojaDirecta",
    url: "https://www.rojadirectatv3.pl",
    description: "High-quality sports streams, primarily in Spanish.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports11.jpg",
  },
  {
    id: "12",
    title: "Superstrim",
    url: "https://superstrim.pages.dev",
    description: "High-quality sports streams, primarily in English.",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    image: "/cards/sports12.jpg",
  },
  {
    id: "13",
    title: "Cinemacity",
    url: "https://cinemacity.cc",
    description: "High-quality movie, TV, and anime streaming sources [DUB + SUB].",
    category: "movies-tv-shows",
    tags: ["movies", "tv shows", "anime"],
    image: "/cards/movies1.jpg",
  },
  {
    id: "14",
    title: "Showbox",
    url: "https://www.showbox.media/",
    description: "High-quality movie and TV streaming sources [SUB].",
    category: "movies-tv-shows",
    tags: ["movies", "tv shows"],
    image: "/cards/movies2.jpg",
  },
  {
    id: "25",
    title: "Uniquestream",
    url: "https://anime.uniquestream.net/",
    description: "High-quality anime streaming sources [DUB + SUB].",
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
