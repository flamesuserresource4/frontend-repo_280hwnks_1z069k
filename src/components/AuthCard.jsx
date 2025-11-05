import React, { useState } from 'react';
import { Mail, Phone, Eye, EyeOff } from 'lucide-react';

const AuthCard = ({ onSuccess }) => {
  const [mode, setMode] = useState('signup');
  const [usePhone, setUsePhone] = useState(true);
  const [showPwd, setShowPwd] = useState(false);
  const [nickname, setNickname] = useState('BollywoodQueen');

  const submit = (e) => {
    e.preventDefault();
    // This demo does not perform real auth. Simulate success.
    onSuccess({ nickname, coins: 50, badge: 'Rising Star' });
  };

  return (
    <div className="bg-white border border-rose-200 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-rose-700">
          {mode === 'signup' ? 'Create your account' : 'Welcome back'}
        </h3>
        <button
          onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
          className="text-sm text-rose-600 underline"
        >
          {mode === 'signup' ? 'Have an account? Log in' : 'New here? Sign up'}
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setUsePhone(true)}
          className={`flex-1 px-3 py-2 rounded-lg border ${usePhone ? 'bg-rose-50 border-rose-300 text-rose-700' : 'bg-white border-rose-200 text-rose-500'}`}
        >
          <span className="inline-flex items-center gap-2"><Phone size={16} /> Phone</span>
        </button>
        <button
          onClick={() => setUsePhone(false)}
          className={`flex-1 px-3 py-2 rounded-lg border ${!usePhone ? 'bg-rose-50 border-rose-300 text-rose-700' : 'bg-white border-rose-200 text-rose-500'}`}
        >
          <span className="inline-flex items-center gap-2"><Mail size={16} /> Email</span>
        </button>
      </div>

      <form onSubmit={submit} className="space-y-3">
        {mode === 'signup' && (
          <div>
            <label className="block text-sm text-rose-700 mb-1">Nickname (shown in rooms)</label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="e.g., GossipQueen"
              required
            />
          </div>
        )}

        {usePhone ? (
          <div>
            <label className="block text-sm text-rose-700 mb-1">Phone Number</label>
            <input type="tel" pattern="[0-9]{10}"
              className="w-full px-3 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="9876543210"
              required
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm text-rose-700 mb-1">Email</label>
            <input type="email"
              className="w-full px-3 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="you@example.com"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm text-rose-700 mb-1">Password</label>
          <div className="relative">
            <input type={showPwd ? 'text' : 'password'}
              className="w-full px-3 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 pr-10"
              placeholder="••••••••"
              required
            />
            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-2 top-1/2 -translate-y-1/2 text-rose-500">
              {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button type="submit" className="w-full py-3 rounded-xl bg-rose-500 text-white font-semibold shadow hover:bg-rose-600">
          {mode === 'signup' ? 'Create account' : 'Log in'}
        </button>
      </form>

      <p className="text-[11px] text-rose-500 mt-3">
        By continuing you agree to our community guidelines. Be kind and keep it fun.
      </p>
    </div>
  );
};

export default AuthCard;
