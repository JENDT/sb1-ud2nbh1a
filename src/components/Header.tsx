import React from 'react';
import { Sun, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-xl font-semibold text-gray-800">Radian Path</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#stories" className="text-gray-600 hover:text-amber-500 transition-colors">Pet Stories</a>
            <a href="#meditation" className="text-gray-600 hover:text-amber-500 transition-colors">Meditation</a>
            <a href="#music" className="text-gray-600 hover:text-amber-500 transition-colors">Calm Music</a>
            <a href="#mood" className="text-gray-600 hover:text-amber-500 transition-colors">Mood Tracker</a>
          </nav>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}