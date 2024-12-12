import Image from 'next/image'

export default function GalleryPage() {
  const images = [
    { src: "/gallery/image1.jpg", alt: "Rotary Club community service event" },
    { src: "/gallery/image2.jpg", alt: "Clean water project inauguration" },
    { src: "/gallery/image3.jpg", alt: "Annual charity gala" },
    { src: "/gallery/image4.jpg", alt: "Youth leadership workshop" },
    { src: "/gallery/image5.jpg", alt: "Environmental conservation drive" },
    { src: "/gallery/image6.jpg", alt: "Health and wellness fair" },
    { src: "/gallery/image7.jpg", alt: "Education support program in action" },
    { src: "/gallery/image8.jpg", alt: "Rotary Club members at international convention" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill={true}
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

