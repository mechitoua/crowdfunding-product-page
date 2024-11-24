import { PledgeModal } from '@components/PledgeModal';
import { ProjectStats } from '@components/ProjectStats';
import { RewardCard } from '@components/RewardCard';
import { SuccessModal } from '@components/SuccessModal';
import { useState } from 'react';

export default function App() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showPledgeModal, setShowPledgeModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [stats, setStats] = useState({
    totalRaised: 89914,
    totalBackers: 5007,
    daysLeft: 56,
    goal: 100000,
  });

  const handlePledge = (amount: number) => {
    setStats((prev) => ({
      ...prev,
      totalRaised: prev.totalRaised + amount,
      totalBackers: prev.totalBackers + 1,
    }));
    setShowPledgeModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div className='min-h-screen bg-[#FAFAFA]'>
      <header className="relative h-[400px] md:h-[500px] bg-[url('/image-hero-mobile.jpg')] md:bg-[url('/image-hero-desktop.jpg')] bg-cover bg-center">
        <nav className='absolute top-0 left-0 right-0 flex justify-between items-center p-6 md:p-12'>
          <h1 className='text-white text-2xl font-bold'>
            <img src='/logo.svg' alt='crowdfund' />
          </h1>

          <button className='md:hidden' onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <img src={showMobileMenu ? '/icon-close-menu.svg' : '/icon-hamburger.svg'} alt='Menu' />
          </button>

          <div className='hidden md:flex gap-8 text-white'>
            <a href='#' className='hover:text-gray-200'>
              About
            </a>
            <a href='#' className='hover:text-gray-200'>
              Discover
            </a>
            <a href='#' className='hover:text-gray-200'>
              Get Started
            </a>
          </div>

          {showMobileMenu && (
            <div className='absolute top-20 left-6 right-6 bg-white rounded-lg shadow-lg md:hidden'>
              <div className='flex flex-col divide-y divide-gray-200'>
                <a href='#' className='px-6 py-4 text-gray-900 hover:text-cyan-500'>
                  About
                </a>
                <a href='#' className='px-6 py-4 text-gray-900 hover:text-cyan-500'>
                  Discover
                </a>
                <a href='#' className='px-6 py-4 text-gray-900 hover:text-cyan-500'>
                  Get Started
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className='max-w-3xl mx-auto px-6 -mt-20 space-y-6 pb-20'>
        <div className='bg-white rounded-lg p-8 text-center relative'>
          <div className='absolute -top-7 left-1/2 transform -translate-x-1/2'>
            <img src='/logo-mastercraft.svg' alt='Mastercraft logo' className='w-14 h-14' />
          </div>
          <h1 className='text-2xl md:text-3xl font-bold mt-4 mb-4'>Mastercraft Bamboo Monitor Riser</h1>
          <p className='text-gray-500 mb-8'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => setShowPledgeModal(true)}
              className='px-8 py-4 bg-moderate-cyan text-white rounded-full font-bold hover:bg-dark-cyan transition-colors'>
              Back this project
            </button>
            <div className='flex items-center'>
              <button onClick={() => setIsBookmarked(!isBookmarked)} className='relative flex items-center group'>
                <div
                  className={`z-10 w-14 h-14 rounded-full ${
                    isBookmarked ? 'bg-dark-cyan' : 'bg-[#2F2F2F]'
                  } flex items-center justify-center transition-colors`}>
                  <img
                    src='/icon-bookmark.svg'
                    alt='Bookmark'
                    className={`w-full h-full ${isBookmarked ? 'filter-bookmark-active' : ''}`}
                  />
                </div>
                <span
                  className={`-ml-2 pl-8 pr-6 h-14 rounded-r-full font-bold bg-[#F4F4F4] leading-[56px] transition-colors hidden md:block ${
                    isBookmarked ? 'text-dark-cyan' : 'text-[#7a7a7a]'
                  }`}>
                  {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </span>
              </button>
            </div>
          </div>
        </div>

        <ProjectStats stats={stats} />

        <div className='bg-white rounded-lg p-6 md:p-12 tracking-wide leading-loose'>
          <h2 className='text-xl font-bold mb-6'>About this project</h2>
          <p className='text-gray-500 mb-8'>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more
            comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and
            make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p className='text-gray-500 mb-8'>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to
            allow notepads, pens, and USB sticks to be stored under the stand.
          </p>

          <RewardCard
            title='Bamboo Stand'
            pledge='25'
            description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
            remaining={101}
            onSelect={() => setShowPledgeModal(true)}
          />

          <RewardCard
            title='Black Edition Stand'
            pledge='75'
            description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
            remaining={64}
            onSelect={() => setShowPledgeModal(true)}
          />

          <RewardCard
            title='Mahogany Special Edition'
            pledge='200'
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
            remaining={0}
            onSelect={() => setShowPledgeModal(true)}
          />
        </div>
      </main>

      {showPledgeModal && <PledgeModal onClose={() => setShowPledgeModal(false)} onPledge={handlePledge} />}
      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}
    </div>
  );
}
