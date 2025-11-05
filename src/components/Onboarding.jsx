import React, { useState, useEffect } from 'react';
import { Heart, Mic, Users } from 'lucide-react';

const slides = [
  {
    title: 'Welcome to MasalaTalk',
    subtitle: 'Chat. Laugh. Belong.',
    desc: 'Join friendly rooms by city or topic. Share daily masala with women like you.',
    icon: <Users className="text-rose-600" size={28} />,
    bg: 'from-rose-100 to-amber-100',
  },
  {
    title: 'Spill the Masala',
    subtitle: 'Text, Voice Notes, Live Rooms',
    desc: 'Post spicy updates, send voice clips, or join live audio gossip rooms.',
    icon: <Mic className="text-amber-600" size={28} />,
    bg: 'from-amber-100 to-rose-100',
  },
  {
    title: 'Earn Badges & Coins',
    subtitle: 'Shine as the Queen of Gossip',
    desc: 'Collect coins, unlock badges, and redeem for saree & kitchen vouchers.',
    icon: <Heart className="text-rose-600" size={28} />,
    bg: 'from-rose-100 to-yellow-100',
  },
];

const Onboarding = ({ onGetStarted }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const s = slides[index];

  return (
    <section className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${s.bg} border border-rose-200`}> 
      <div className="p-6 text-center">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center shadow mb-3">
          {s.icon}
        </div>
        <h2 className="text-2xl font-bold text-rose-700">{s.title}</h2>
        <p className="text-rose-500 font-medium">{s.subtitle}</p>
        <p className="mt-2 text-rose-600 max-w-md mx-auto leading-relaxed">{s.desc}</p>

        <div className="mt-5 flex items-center justify-center gap-1.5">
          {slides.map((_, i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-rose-500' : 'bg-rose-300'}`} />
          ))}
        </div>

        <button
          onClick={onGetStarted}
          className="mt-6 w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-white font-semibold shadow hover:opacity-95"
        >
          Get Started
        </button>
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-amber-200/50" />
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-rose-200/50" />
      </div>
    </section>
  );
};

export default Onboarding;
