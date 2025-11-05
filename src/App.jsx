import React, { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import Onboarding from './components/Onboarding';
import AuthCard from './components/AuthCard';
import HomeFeed from './components/HomeFeed';

function App() {
  const [tab, setTab] = useState('onboarding');
  const [profile, setProfile] = useState({ nickname: '', coins: 0, badge: null });

  useEffect(() => {
    // simple analytics demo
    console.log('MasalaTalk view:', tab);
  }, [tab]);

  const handleSuccessAuth = (data) => {
    setProfile({ ...data });
    setTab('home');
  };

  return (
    <div className="min-h-screen bg-rose-50 text-rose-900">
      <HeaderNav current={tab} onNavigate={setTab} coins={profile.coins} badge={profile.badge} />

      <main className="max-w-4xl mx-auto p-4 pb-24">
        <div className="grid gap-4">
          {tab === 'onboarding' && (
            <>
              <Onboarding onGetStarted={() => setTab('auth')} />
              <section className="bg-white border border-rose-200 rounded-2xl p-5">
                <h3 className="text-rose-700 font-semibold mb-2">Why women love MasalaTalk</h3>
                <ul className="list-disc pl-5 text-rose-600 space-y-1 text-sm">
                  <li>Join rooms by city or favorite TV serials</li>
                  <li>Anonymous nicknames for comfy chats</li>
                  <li>Earn coins and redeem real vouchers</li>
                </ul>
              </section>
            </>
          )}

          {tab === 'auth' && (
            <>
              <AuthCard onSuccess={handleSuccessAuth} />
              <section className="bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 rounded-2xl p-5">
                <p className="text-sm text-rose-600">
                  Tip: Pick a fun nickname like BollywoodQueen or GossipGuru to stay anonymous in rooms.
                </p>
              </section>
            </>
          )}

          {tab === 'home' && (
            <>
              <div className="bg-white border border-rose-200 rounded-2xl p-5">
                <p className="text-rose-700 font-medium">
                  Hi {profile.nickname || 'Masala Queen'}! Ready to spill the tea?
                </p>
              </div>
              <HomeFeed nickname={profile.nickname} />
            </>
          )}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-rose-200">
        <div className="max-w-4xl mx-auto px-4 py-3 text-center text-xs text-rose-500">
          © {new Date().getFullYear()} MasalaTalk • Made with love for Indian communities
        </div>
      </footer>
    </div>
  );
}

export default App;
