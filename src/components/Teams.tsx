import React from 'react';
import { Users, Award, TrendingUp, Star, Trophy } from 'lucide-react';

const Teams: React.FC = () => {
  const teams = [
    {
      id: 1,
      game: 'VALORANT',
      name: 'NEXUS VALORANT',
      players: 5,
      rank: '#3 EMEA',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      game: 'LEAGUE OF LEGENDS',
      name: 'NEXUS LEC',
      players: 5,
      rank: '#1 LEC',
      image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      game: 'COUNTER-STRIKE 2',
      name: 'NEXUS CS2',
      players: 5,
      rank: '#5 WORLD',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
  ];

  return (
    <section id="teams" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            OUR TEAMS
          </h2>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              {/* Team Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#42d0f4] to-[#6096dc] text-white px-3 py-1 rounded text-xs font-bold tracking-wide">
                    {team.game}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{team.name}</h3>
                  <p className="text-gray-300 text-sm font-medium">{team.rank}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;