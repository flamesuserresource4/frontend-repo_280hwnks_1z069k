import React from 'react';
import { Flame, Mic, Vote, MapPin, Play, Gift, Crown } from 'lucide-react';

const TrendingCard = ({ title, meta, badge }) => (
  <div className="p-4 rounded-xl border border-rose-200 bg-white shadow-sm">
    <div className="flex items-center justify-between">
      <h4 className="font-semibold text-rose-700">{title}</h4>
      {badge && (
        <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
          <Crown size={12} /> {badge}
        </span>
      )}
    </div>
    <p className="text-sm text-rose-500 mt-1">{meta}</p>
  </div>
);

const AudioClip = ({ who, seconds }) => (
  <button className="w-full flex items-center gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50">
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-amber-300 flex items-center justify-center">
      <Play size={16} className="text-white" />
    </div>
    <div className="text-left">
      <p className="text-sm font-medium text-rose-700">{who}</p>
      <p className="text-xs text-rose-500">Voice note • {seconds}s</p>
    </div>
  </button>
);

const RoomPill = ({ name, live, listeners }) => (
  <button className={`px-3 py-2 rounded-full border text-sm ${live ? 'bg-rose-100 border-rose-200 text-rose-700' : 'bg-white border-rose-200 text-rose-500'}`}>
    {name} {live && <span className="ml-1 text-[10px] text-rose-600">• {listeners} listening</span>}
  </button>
);

const RewardItem = ({ title, coins }) => (
  <div className="p-4 rounded-xl border border-amber-200 bg-white">
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-rose-700">{title}</p>
        <p className="text-sm text-rose-500">Redeem for {coins} coins</p>
      </div>
      <Gift className="text-amber-600" size={20} />
    </div>
  </div>
);

const HomeFeed = ({ nickname }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 rounded-2xl p-5">
        <div className="flex items-center gap-2">
          <Flame className="text-rose-600" size={18} />
          <h3 className="text-rose-700 font-semibold">Trending Masala</h3>
        </div>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <TrendingCard title="Serial Spoilers: What happens next in Anupamaa?" meta="5.4k views • 230 comments" badge="Hot" />
          <TrendingCard title="Best saree deals this week" meta="Deals • 1.1k saves" />
        </div>
      </div>

      <div className="bg-white border border-rose-200 rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mic className="text-rose-600" size={18} />
            <h3 className="text-rose-700 font-semibold">Live Gossip Rooms</h3>
          </div>
          <button className="text-sm text-rose-600 underline">Create Room</button>
        </div>
        <div className="mt-3 flex gap-2 overflow-auto no-scrollbar">
          <RoomPill name={<span className="inline-flex items-center gap-1"><MapPin size={14}/> Delhi Masala</span>} live listeners={312} />
          <RoomPill name="Serial Spoilers" live listeners={189} />
          <RoomPill name="Kitchen Hacks" />
          <RoomPill name="Bollywood Buzz" live listeners={95} />
        </div>
      </div>

      <div className="bg-white border border-rose-200 rounded-2xl p-5">
        <div className="flex items-center gap-2">
          <Vote className="text-rose-600" size={18} />
          <h3 className="text-rose-700 font-semibold">Quick Polls</h3>
        </div>
        <div className="mt-3 grid gap-3">
          <button className="p-3 rounded-xl border border-rose-200 text-left hover:bg-rose-50">
            Which serial couple do you ship the most?
            <div className="mt-2 flex gap-2 text-sm text-rose-600">
              <span className="px-2 py-1 rounded-full bg-rose-100">Anu & Anuj</span>
              <span className="px-2 py-1 rounded-full bg-rose-100">Akshu & Abhi</span>
              <span className="px-2 py-1 rounded-full bg-rose-100">Sai & Virat</span>
            </div>
          </button>
          <AudioClip who={`${nickname || 'You'} • New voice note`} seconds={23} />
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex items-center gap-2">
          <Gift className="text-amber-600" size={18} />
          <h3 className="text-rose-700 font-semibold">Reward Store</h3>
        </div>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <RewardItem title="Saree Voucher (₹500)" coins={300} />
          <RewardItem title="Kitchenware Discount (₹300)" coins={180} />
          <RewardItem title="Food Delivery Coupon (₹200)" coins={120} />
          <RewardItem title="OTT Subscription (1 month)" coins={400} />
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
