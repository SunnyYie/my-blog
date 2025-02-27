import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js and Server Components',
    excerpt:
      'Learn how to build modern web applications with Next.js 14 and its revolutionary Server Components feature',
    coverImage:
      'https://sjc.microlink.io/Mq4evL4M5eEC2SQ-EzPQeAypRZDHaGmoYeKNz5rsc3ZD21gz2B1wG8LOoWkPqdKprxGZ1kTVdechVMrNsAN7Ew.jpeg',
    author: {
      name: 'Sarah Johnson',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    readTime: '5 min read',
    publishedAt: '2h ago',
    likes: 234,
    comments: 45,
    tags: ['Next.js', 'React', 'Web Development'],
  },
  {
    id: 2,
    title: 'The Complete Guide to Tailwind CSS v3.0',
    excerpt: 'Discover how Tailwind CSS can streamline your styling workflow with its latest features and improvements',
    coverImage:
      'https://sjc.microlink.io/Mq4evL4M5eEC2SQ-EzPQeAypRZDHaGmoYeKNz5rsc3ZD21gz2B1wG8LOoWkPqdKprxGZ1kTVdechVMrNsAN7Ew.jpeg',
    author: {
      name: 'Mike Chen',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    readTime: '7 min read',
    publishedAt: '4h ago',
    likes: 189,
    comments: 32,
    tags: ['CSS', 'Tailwind', 'Frontend'],
  },
  // Add more posts as needed
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Your Feed</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Image
                      src={post.author.avatar || '/placeholder.svg'}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{post.publishedAt}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
