import type { Bookmark, Category } from "./types"

export const categories: Category[] = [
  {
    slug: "desarrollo",
    name: "Desarrollo",
    description: "Herramientas, documentación y recursos para programar.",
  },
  {
    slug: "diseno",
    name: "Diseño",
    description: "Inspiración, interfaces y recursos visuales.",
  },
  {
    slug: "aprendizaje",
    name: "Aprendizaje",
    description: "Cursos, tutoriales y contenido para seguir mejorando.",
  },
]

export const bookmarks: Bookmark[] = [
  {
    id: "1",
    title: "Next.js",
    url: "https://nextjs.org",
    description: "Framework React para aplicaciones web rápidas y modernas.",
    category: "desarrollo",
    tags: ["react", "frontend", "framework"],
    featured: true,
  },
  {
    id: "2",
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "Framework de utilidades CSS para construir interfaces rápido.",
    category: "desarrollo",
    tags: ["css", "ui", "frontend"],
    featured: true,
  },
  {
    id: "3",
    title: "Dribbble",
    url: "https://dribbble.com",
    description: "Inspiración visual para productos, interfaces y branding.",
    category: "diseno",
    tags: ["inspiracion", "ui", "branding"],
    featured: true,
  },
  {
    id: "4",
    title: "Mobbin",
    url: "https://mobbin.com",
    description: "Patrones y pantallas reales de productos digitales.",
    category: "diseno",
    tags: ["ux", "apps", "inspiracion"],
  },
  {
    id: "5",
    title: "freeCodeCamp",
    url: "https://www.freecodecamp.org",
    description: "Cursos prácticos y material gratuito para aprender desarrollo.",
    category: "aprendizaje",
    tags: ["cursos", "programacion", "gratis"],
    featured: true,
  },
  {
    id: "6",
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description: "Referencia excelente para HTML, CSS, JS y APIs web.",
    category: "aprendizaje",
    tags: ["docs", "web", "javascript"],
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
