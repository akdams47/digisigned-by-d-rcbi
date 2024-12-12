import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Impact of Clean Water on Community Health",
      date: "August 15, 2023",
      excerpt: "Discover how our clean water initiatives are transforming lives in Bonny Island...",
      image: "/blog/clean-water-impact.jpg",
      slug: "clean-water-impact",
    },
    {
      title: "Empowering Youth Through Education",
      date: "July 28, 2023",
      excerpt: "Learn about our latest efforts to support education and youth development in our community...",
      image: "/blog/youth-education.jpg",
      slug: "empowering-youth-education",
    },
    {
      title: "Rotary's Role in Environmental Conservation",
      date: "June 5, 2023",
      excerpt: "Explore how Rotary clubs worldwide are contributing to environmental sustainability...",
      image: "/blog/environmental-conservation.jpg",
      slug: "rotary-environmental-conservation",
    },
    {
      title: "Celebrating Our Annual Charity Gala Success",
      date: "May 20, 2023",
      excerpt: "Recap of our most successful charity gala yet, and how the funds will be used...",
      image: "/blog/charity-gala-recap.jpg",
      slug: "charity-gala-success",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">Rotary Club of Bonny Island Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={post.image} alt={post.title} width={600} height={400} className="w-full" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-[#0050a0] font-bold hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

