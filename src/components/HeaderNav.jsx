import React from 'react';
import { MessageCircle, Star, Coins, User } from 'lucide-react';

const HeaderNav = ({ current, onNavigate, coins = 0, badge = null }) => {
  return (
    <header className="sticky top-0 z-20 bg-rose-50/80 backdrop-blur border-b border-rose-100">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-400 to-amber-300 flex items-center justify-center shadow">
            <MessageCircle className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-rose-700 leading-tight">MasalaTalk</h1>
            <p className="text-[11px] text-rose-500 -mt-0.5">Chat. Laugh. Belong.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white border border-amber-200 text-amber-700 px-2 py-1 rounded-full shadow-sm">
            <Coins size={16} />
            <span className="text-sm font-medium">{coins}</span>
          </div>
          <div className="flex items-center gap-1 bg-white border border-rose-200 text-rose-700 px-2 py-1 rounded-full shadow-sm">
            <Star size={16} />
            <span className="text-sm font-medium">{badge || 'Newbie'}</span>
          </div>
          <button aria-label="Account" className="w-9 h-9 rounded-full bg-white border border-rose-200 flex items-center justify-center">
            <User size={18} className="text-rose-600" />
          </button>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 pb-2">
        <div className="grid grid-cols-3 gap-2">
          {[
            { key: 'onboarding', label: 'Welcome' },
            { key: 'auth', label: 'Join In' },
            { key: 'home', label: 'Home' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => onNavigate(tab.key)}
              className={`text-sm py-2 rounded-lg border transition-all ${
                current === tab.key
                  ? 'bg-rose-100 text-rose-700 border-rose-200'
                  : 'bg-white text-rose-600 border-rose-200 hover:bg-rose-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
