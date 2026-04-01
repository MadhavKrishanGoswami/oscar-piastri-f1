'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  Zap,
  Target,
  Star,
  Flag,
  Calendar,
  Clock,
  MapPin,
  ChevronRight
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Oscar Piastri Data
const driverInfo = {
  name: "OSCAR PIASTRI",
  number: 81,
  team: "McLaren F1 Team",
  nationality: "Australian",
  born: "April 6, 2001",
  debut: "2023 Bahrain GP",
  firstWin: "2024 Hungarian GP",
  podiums: 8,
  wins: 2,
  poles: 0,
  fastestLaps: 2,
  points2024: 292,
  championship2024: 4,
  totalPoints: 408,
  races: 44,
};

const raceResults2024 = [
  { race: "BHR", name: "Bahrain", position: 8, points: 4, quali: 8 },
  { race: "SAU", name: "Saudi Arabia", position: 4, points: 12, quali: 5 },
  { race: "AUS", name: "Australia", position: 4, points: 12, quali: 5 },
  { race: "JPN", name: "Japan", position: 8, points: 4, quali: 6 },
  { race: "CHN", name: "China", position: 8, points: 6, quali: 5 },
  { race: "MIA", name: "Miami", position: 13, points: 0, quali: 6 },
  { race: "EMI", name: "Imola", position: 4, points: 12, quali: 5 },
  { race: "MON", name: "Monaco", position: 2, points: 18, quali: 2 },
  { race: "CAN", name: "Canada", position: 5, points: 10, quali: 4 },
  { race: "ESP", name: "Spain", position: 7, points: 6, quali: 9 },
  { race: "AUT", name: "Austria", position: 2, points: 24, quali: 3 },
  { race: "GBR", name: "Great Britain", position: 4, points: 12, quali: 3 },
  { race: "HUN", name: "Hungary", position: 1, points: 25, quali: 2 },
  { race: "BEL", name: "Belgium", position: 3, points: 15, quali: 5 },
  { race: "NED", name: "Netherlands", position: 4, points: 12, quali: 6 },
  { race: "ITA", name: "Italy", position: 2, points: 18, quali: 2 },
  { race: "AZE", name: "Azerbaijan", position: 1, points: 25, quali: 2 },
  { race: "SIN", name: "Singapore", position: 3, points: 15, quali: 5 },
  { race: "USA", name: "United States", position: 5, points: 11, quali: 3 },
  { race: "MXC", name: "Mexico City", position: 5, points: 10, quali: 3 },
  { race: "SAP", name: "São Paulo", position: 8, points: 5, quali: 6 },
  { race: "LVG", name: "Las Vegas", position: 7, points: 6, quali: 10 },
  { race: "QAT", name: "Qatar", position: 3, points: 19, quali: 6 },
  { race: "ABU", name: "Abu Dhabi", position: 10, points: 1, quali: 5 },
];

const careerPath = [
  { year: "2016", series: "Formula 4 UAE", position: "6th", highlight: "2 wins" },
  { year: "2017", series: "British F4", position: "1st", highlight: "Champion" },
  { year: "2018", series: "F3 Asian", position: "2nd", highlight: "Runner-up" },
  { year: "2019", series: "Renault Eurocup", position: "1st", highlight: "Champion" },
  { year: "2020", series: "F3", position: "1st", highlight: "Champion" },
  { year: "2021", series: "F2", position: "1st", highlight: "Champion" },
  { year: "2022", series: "Reserve Driver", position: "—", highlight: "Alpine & McLaren" },
  { year: "2023", series: "Formula 1", position: "9th", highlight: "F1 Debut" },
  { year: "2024", series: "Formula 1", position: "4th", highlight: "2 Wins" },
];

const upcomingRaces2025 = [
  { date: "MAR 14-16", name: "Australian GP", location: "Melbourne", status: "home" },
  { date: "MAR 21-23", name: "Chinese GP", location: "Shanghai", status: "upcoming" },
  { date: "APR 04-06", name: "Japanese GP", location: "Suzuka", status: "upcoming" },
  { date: "APR 11-13", name: "Bahrain GP", location: "Sakhir", status: "upcoming" },
  { date: "APR 18-20", name: "Saudi Arabian GP", location: "Jeddah", status: "upcoming" },
];

const teammateComparison = [
  { metric: "Qualifying H2H", oscar: "8", lando: "16", label: "2024 Season" },
  { metric: "Race H2H", oscar: "10", lando: "14", label: "2024 Season" },
  { metric: "Points", oscar: "292", lando: "374", label: "2024 Season" },
  { metric: "Wins", oscar: "2", lando: "4", label: "2024 Season" },
  { metric: "Podiums", oscar: "8", lando: "13", label: "2024 Season" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 geometric-pattern opacity-50 pointer-events-none" />
      
      {/* Racing Lines */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8000] to-transparent opacity-50" />
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8000] to-transparent opacity-50" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF8000]/5 via-transparent to-[#0055FF]/5" />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,128,0,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,128,0,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Number Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-6xl md:text-8xl font-bold text-[#FF8000]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              81
            </span>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#FF8000] to-transparent" />
            <div className="text-left">
              <span className="text-sm text-white/60 uppercase tracking-widest">Driver</span>
              <span className="block text-white/40 text-xs">McLaren F1 Team</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-8xl font-black mb-4 tracking-tight"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="gradient-text">OSCAR</span>
          </motion.h1>
          <motion.h1 
            className="text-5xl md:text-8xl font-black mb-8 tracking-tight"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-white">PIASTRI</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Australian F1 Driver • 2x Grand Prix Winner • 
            <span className="text-[#FF8000]"> Future World Champion</span>
          </motion.p>

          {/* Quick Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { label: "Wins", value: driverInfo.wins, icon: Trophy },
              { label: "Podiums", value: driverInfo.podiums, icon: Award },
              { label: "Points 2024", value: driverInfo.points2024, icon: Star },
              { label: "Races", value: driverInfo.races, icon: Flag },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="w-4 h-4 text-[#FF8000]" />
                  <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-wider text-white/50">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-[#FF8000]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#FF8000] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Grid Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-white">CAREER </span>
            <span className="text-[#FF8000]">STATS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Formula 1 Wins", value: 2, suffix: "", icon: Trophy },
            { label: "Podiums", value: 8, suffix: "", icon: Award },
            { label: "Fastest Laps", value: 2, suffix: "", icon: Zap },
            { label: "Championship Best", value: 4, suffix: "th", icon: Target },
            { label: "Total Points", value: 408, suffix: "", icon: Star },
            { label: "Races Completed", value: 44, suffix: "", icon: Flag },
            { label: "First Win", value: "2024", suffix: "", icon: Calendar },
            { label: "F1 Debut", value: "2023", suffix: "", icon: Clock },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card p-6 group hover:border-[#FF8000]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <stat.icon className="w-6 h-6 text-[#FF8000] mb-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/50">{stat.label}</div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8000]/0 to-[#FF8000]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2024 Season Results */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-[#141414] to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-white">2024 SEASON </span>
              <span className="text-[#FF8000]">RESULTS</span>
            </h2>
            <p className="text-white/60 max-w-2xl">
              Breakthrough year with first two Grand Prix victories. Finished 4th in the World Championship with McLaren.
            </p>
          </motion.div>

          {/* Results Chart */}
          <motion.div
            className="bg-[#141414] rounded-2xl p-6 border border-white/10 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white/80">Race Finishing Positions</h3>
            {mounted && (
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={raceResults2024}>
                  <defs>
                    <linearGradient id="positionGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF8000" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FF8000" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis 
                    dataKey="race" 
                    stroke="#666" 
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis 
                    reversed 
                    domain={[1, 20]} 
                    stroke="#666"
                    fontSize={12}
                    tickLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a1a', 
                      border: '1px solid #333',
                      borderRadius: '8px'
                    }}
                    labelStyle={{ color: '#FF8000' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="position" 
                    stroke="#FF8000" 
                    strokeWidth={2}
                    fill="url(#positionGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {/* Race List */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {raceResults2024.map((race, i) => (
              <motion.div
                key={race.race}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  race.position === 1 
                    ? 'bg-[#FF8000]/20 border-[#FF8000] text-[#FF8000]' 
                    : race.position <= 3 
                    ? 'bg-[#0055FF]/10 border-[#0055FF]/50 text-[#0055FF]' 
                    : 'bg-[#1a1a1a] border-white/10 text-white/80'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xs uppercase tracking-wider opacity-70">{race.race}</div>
                <div className="text-2xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  P{race.position}
                </div>
                {race.points > 0 && (
                  <div className="text-xs opacity-60">+{race.points} pts</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teammate Comparison */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-white">TEAMMATE </span>
            <span className="text-[#FF8000]">BATTLE</span>
          </h2>
          <p className="text-white/60">2024 Season: Piastri vs Norris at McLaren</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teammateComparison.map((item, i) => (
            <motion.div
              key={item.metric}
              className="bg-[#141414] rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-sm text-white/50 mb-4 uppercase tracking-wider">{item.metric}</div>
              <div className="flex items-end justify-between">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF8000]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {item.oscar}
                  </div>
                  <div className="text-xs text-white/50 mt-1">Piastri</div>
                </div>
                <div className="text-xs text-white/30 uppercase tracking-widest pb-2">VS</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0055FF]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {item.lando}
                  </div>
                  <div className="text-xs text-white/50 mt-1">Norris</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Path Timeline */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-[#0f0f0f] to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-white">ROAD TO </span>
              <span className="text-[#FF8000]">F1</span>
            </h2>
            <p className="text-white/60">Triple Crown winner: F3 → F2 → F1 success</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF8000] via-[#FF8000]/50 to-transparent" />

            {careerPath.map((item, i) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className={`ml-12 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-[#141414] rounded-xl p-5 border border-white/10 hover:border-[#FF8000]/50 transition-colors">
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="text-[#FF8000] font-bold text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {item.year}
                      </span>
                      {item.highlight.includes("Champion") && (
                        <Trophy className="w-4 h-4 text-[#FFD700]" />
                      )}
                    </div>
                    <div className="text-white font-semibold">{item.series}</div>
                    <div className="text-white/60 text-sm">{item.position} • {item.highlight}</div>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF8000] border-4 border-[#0a0a0a] z-10" />
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Races */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-white">2025 </span>
            <span className="text-[#FF8000]">CALENDAR</span>
          </h2>
          <p className="text-white/60">Upcoming races for the new season</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingRaces2025.map((race, i) => (
            <motion.div
              key={race.name}
              className={`relative overflow-hidden rounded-xl border p-6 transition-all duration-300 ${
                race.status === 'home' 
                  ? 'bg-gradient-to-br from-[#FF8000]/20 to-[#141414] border-[#FF8000] glow-papaya' 
                  : 'bg-[#141414] border-white/10 hover:border-white/30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              {race.status === 'home' && (
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#FF8000] text-black text-xs font-bold rounded-full">
                  HOME RACE 🇦🇺
                </div>
              )}
              
              <div className="text-[#FF8000] font-bold text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {race.date}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{race.name}</h3>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />
                {race.location}
              </div>

              {race.status === 'home' && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-white/70">
                    Oscar's home Grand Prix at Albert Park, Melbourne
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl text-[#FF8000]/30 font-serif mb-6">&ldquo;</div>
          <blockquote className="text-2xl md:text-4xl font-light text-white/90 mb-8 leading-relaxed">
            I&apos;m here to win races and championships. That&apos;s the goal, 
            <span className="text-[#FF8000]"> that&apos;s always been the goal.</span>
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#FF8000]" />
            <span className="text-white/60 uppercase tracking-widest text-sm">Oscar Piastri</span>
            <div className="h-px w-12 bg-[#FF8000]" />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-[#FF8000]" style={{ fontFamily: 'Orbitron, sans-serif' }}>81</span>
            <div>
              <div className="text-white font-bold">OSCAR PIASTRI</div>
              <div className="text-white/50 text-sm">Unofficial Fan Dashboard</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-[#FF8000] transition-colors text-sm">Race Results</a>
            <a href="#" className="text-white/60 hover:text-[#FF8000] transition-colors text-sm">Statistics</a>
            <a href="#" className="text-white/60 hover:text-[#FF8000] transition-colors text-sm">Calendar</a>
          </div>
          
          <div className="text-white/40 text-sm">
            Made for F1 fans 🧡🏎️
          </div>
        </div>
      </footer>
    </main>
  );
}
