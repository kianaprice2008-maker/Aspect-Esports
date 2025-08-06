import React from 'react';
import { Calendar, Clock, Trophy, ChevronRight } from 'lucide-react';

const UpcomingMatches: React.FC = () => {
  const matches = [
    {
      id: 1,
      game: 'VALORANT',
      opponent: 'Team Liquid',
      date: 'JAN 15',
      time: '6:00 PM EST',
      tournament: 'VCT CHAMPIONS',
      status: 'LIVE',
      status: 'upcoming'
    },
    {
      id: 2,
      game: 'LEAGUE OF LEGENDS',
      opponent: 'G2 Esports',
      date: 'JAN 18',
      time: '8:00 PM EST',
      tournament: 'LEC WINTER',
      status: 'upcoming'
    },
    {
      id: 3,
      game: 'COUNTER-STRIKE 2',
      opponent: 'FaZe Clan',
      date: 'JAN 22',
      time: '4:00 PM EST',
      tournament: 'ESL PRO LEAGUE',
      status: 'upcoming'
    }
  ];

  return (
    <section id="matches" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            UPCOMING MATCHES
          </h2>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 group cursor-pointer"
            >
              {/* Game and Status */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400 text-sm font-semibold tracking-wide">
                  {match.game}
                </span>
                <span className="bg-gradient-to-r from-[#42d0f4] to-[#6096dc] text-white px-2 py-1 rounded text-xs font-bold tracking-wide">
                  {match.status === 'upcoming' ? 'UPCOMING' : match.status}
                </span>
              </div>

              {/* Match Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                  NEXUS
                  <span className="text-gray-500 mx-3">VS</span>
                  {match.opponent}
                </h3>
                <p className="text-gray-400 font-semibold text-sm tracking-wide">{match.tournament}</p>
              </div>

              {/* Date and Time */}
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">{match.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">{match.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;