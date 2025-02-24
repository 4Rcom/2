import React from 'react';
import { Upload, Play, Zap } from 'lucide-react';

function DotArt() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Videos
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Our advanced AI technology converts your videos into stunning dot art animations, 
                creating a unique visual experience that stands out.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Try It Now
              </button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="https://cdn.coverr.co/videos/coverr-walking-in-tokyo-streets-4584/1080p.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Upload</h3>
              <p className="text-gray-400">Upload your video in any common format</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Process</h3>
              <p className="text-gray-400">Our AI transforms your video into dot art</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Download</h3>
              <p className="text-gray-400">Get your artistic video in high quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-black rounded-lg">
              <h3 className="text-xl font-semibold mb-4">High Quality Output</h3>
              <p className="text-gray-400">Get crystal clear dot art videos in up to 4K resolution</p>
            </div>
            <div className="p-6 bg-black rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Patterns</h3>
              <p className="text-gray-400">Choose from various dot patterns and styles</p>
            </div>
            <div className="p-6 bg-black rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Fast Processing</h3>
              <p className="text-gray-400">Get your processed video in minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Try It Yourself</h2>
          <div className="max-w-xl mx-auto">
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-12">
              <Play className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400">
                Drag and drop your video here or click to browse
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DotArt;