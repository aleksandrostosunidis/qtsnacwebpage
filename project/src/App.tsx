import React, { useState, useEffect } from 'react';
import { Twitch, Instagram, Atom as Tiktok, Twitter, Disc as Discord, Heart, Users, Target, Monitor, Gamepad2, Cat, MapPin, Calendar, Crown, Youtube } from 'lucide-react';

function App() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkStreamStatus = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/twitch-status`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error(`Expected JSON response but got ${contentType}`);
        }

        const data = await response.json();
        setIsLive(data.isLive);
      } catch (error) {
        console.error('Error checking stream status:', error);
        setIsLive(false);
      }
    };

    // Check initially
    checkStreamStatus();

    // Check every 60 seconds
    const interval = setInterval(checkStreamStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=2940")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold mb-4">qtsnac</h1>
          <p className="text-2xl mb-8">Marvel Rivals Main Streamer</p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <div className="bg-purple-600 px-6 py-2 rounded-full">
                <span className="font-semibold">535/600 Followers</span>
              </div>
              <div className="bg-purple-600 px-6 py-2 rounded-full">
                <span className="font-semibold">18/30 Sub Points</span>
              </div>
            </div>
            {isLive && (
              <a
                href="https://www.twitch.tv/qtsnac"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full flex items-center gap-3 transition-all transform hover:scale-105"
              >
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <span className="font-bold text-lg">LIVE NOW</span>
                <Twitch className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-2">
          <Heart className="text-purple-500" /> About Nicole
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <InfoItem icon={Calendar} text="25 years old" />
            <InfoItem icon={MapPin} text="Bulgaria, Sofia" />
            <InfoItem icon={Cat} text="Pet: Cookie (She's a baddie)" />
            <InfoItem icon={Gamepad2} text="Started gaming at 15, first game was League" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Games I Play</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Marvel Rivals (Main)</li>
              <li>Overwatch</li>
              <li>League of Legends</li>
              <li>Valorant</li>
              <li>Genshin Impact</li>
              <li>Honkai Star Rail</li>
              <li>Apex Legends</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PC Specs */}
      <div className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-2">
            <Monitor className="text-purple-500" /> Setup Specs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">PC Components</h3>
              <ul className="space-y-2">
                <li><span className="text-purple-400">CPU:</span> Intel i9 - 14900KF</li>
                <li><span className="text-purple-400">GPU:</span> Nvidia GeForce RTX 3080</li>
                <li><span className="text-purple-400">RAM:</span> 2x16GB Kit Kingston FURY Renegade</li>
                <li><span className="text-purple-400">MB:</span> Gigabyte Z790 AORUS ELITE AX ICE</li>
                <li><span className="text-purple-400">Case:</span> NZXT H6 Flow RGB Matte White Case</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Peripherals</h3>
              <ul className="space-y-2">
                <li><span className="text-purple-400">Chair:</span> Arozzi Inizio Fabric Black</li>
                <li><span className="text-purple-400">Mouse:</span> Glorious Model O-</li>
                <li><span className="text-purple-400">Headset:</span> Steelseries Arctis Pro Wireless</li>
                <li><span className="text-purple-400">Mousepad:</span> Steelseries QCK Heavy XXL</li>
                <li><span className="text-purple-400">Keyboard:</span> Logitech G715 TKL Wireless</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Rules & Partners */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-2">
              <Crown className="text-purple-500" /> Chat Rules
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Be respectful to everyone
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                No spam or self-promotion
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Keep it family friendly
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Have fun and enjoy the stream!
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-2">
              <Users className="text-purple-500" /> Partners
            </h2>
            <div className="space-y-4">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Marvel Rivals Bulgaria</h3>
                <p className="mb-4">Official Discord Community Partner</p>
                <a 
                  href="https://discord.gg/5jNGHcWuFX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  <Discord size={20} />
                  Join Community
                </a>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Duo Partner</h3>
                <p>@cheesyisbetter</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <footer className="bg-zinc-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6">
            <SocialLink icon={Twitch} href="https://www.twitch.tv/qtsnac" />
            <SocialLink icon={Instagram} href="https://www.instagram.com/qtsnac/" />
            <SocialLink icon={Tiktok} href="https://www.tiktok.com/@qtsnacttv" />
            <SocialLink icon={Twitter} href="https://www.x.com/qtsnac" />
            <SocialLink icon={Discord} href="https://discord.gg/5jNGHcWuFX" />
            <SocialLink icon={Youtube} href="https://www.youtube.com/@qtsnac" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function InfoItem({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-purple-500" />
      <span>{text}</span>
    </div>
  );
}

function SocialLink({ icon: Icon, href }: { icon: React.ElementType; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-purple-500 transition"
    >
      <Icon size={24} />
    </a>
  );
}

export default App;