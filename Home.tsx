import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Play, Zap } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
            src="https://cdn.coverr.co/videos/coverr-woman-walking-in-the-city-5244/1080p.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          {/* Gradient Background */}
          <div className="absolute inset-0 mix-blend-soft-light">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-red-800/20 to-fuchsia-900/30 animate-gradient"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
            Transform Your Videos into Dot Art
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Create stunning artistic videos with our advanced dot-style processing
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/dot-art')}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              How it Works
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="bg-transparent border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Try for Free
            </button>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="py-12 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2025 DotVideo. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;