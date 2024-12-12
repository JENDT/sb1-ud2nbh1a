import React, { useState } from 'react';
import { Smile, Meh, Frown, Calendar } from 'lucide-react';

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { icon: Smile, label: 'Happy', color: 'text-green-500' },
    { icon: Meh, label: 'Neutral', color: 'text-yellow-500' },
    { icon: Frown, label: 'Sad', color: 'text-blue-500' },
  ];

  return (
    <section id="mood" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Daily Mood Tracker</h2>
          <p className="text-gray-600">Track your emotional journey with your pets</p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">How are you feeling today?</h3>
            <Calendar className="h-5 w-5 text-gray-500" />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {moods.map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                onClick={() => setSelectedMood(label)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedMood === label
                    ? 'border-amber-500 bg-amber-50'
                    : 'border-gray-200 hover:border-amber-200'
                }`}
              >
                <Icon className={`h-8 w-8 mx-auto mb-2 ${color}`} />
                <span className="block text-sm text-gray-600">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}