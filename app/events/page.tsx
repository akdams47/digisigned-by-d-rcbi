import Image from 'next/image'

export default function EventsPage() {
  const events = [
    {
      title: "Annual Charity Gala",
      date: "September 15, 2023",
      description: "Join us for our annual fundraising event to support local education initiatives.",
      image: "/charity-gala.jpg",
    },
    {
      title: "Community Cleanup Drive",
      date: "October 1, 2023",
      description: "Help us keep Bonny Island beautiful by participating in our cleanup initiative.",
      image: "/community-cleanup.jpg",
    },
    {
      title: "Health and Wellness Fair",
      date: "November 5, 2023",
      description: "A day of free health screenings, wellness workshops, and fitness activities for the community.",
      image: "/health-fair.jpg",
    },
    {
      title: "Youth Leadership Seminar",
      date: "December 10, 2023",
      description: "Empowering the next generation of leaders through interactive workshops and mentoring sessions.",
      image: "/youth-leadership.jpg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={event.image} alt={event.title} width={600} height={400} className="w-full" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-[#0050a0] font-bold mb-4">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

