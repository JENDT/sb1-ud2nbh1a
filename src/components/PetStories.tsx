import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

export default function PetStories() {
  const stories = [
    {
      title: "Luna's Journey to Peace",
      excerpt: "How meditation helped calm an anxious rescue dog",
      image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48",
      author: "Sarah Mitchell",
    },
    {
      title: "Healing Together",
      excerpt: "A story of mutual recovery through mindfulness",
      image: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467",
      author: "James Wilson",
    },
    {
      title: "Finding Balance",
      excerpt: "Daily meditation routines with your furry friend",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
      author: "Emma Thompson",
    },
  ];

  return (
    <section id="stories" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Inspiring Pet Stories</h2>
          <p className="text-gray-600">Real stories from our community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{story.author}</span>
                  <div className="flex space-x-2">
                    <BookOpen className="h-5 w-5 text-amber-500" />
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}