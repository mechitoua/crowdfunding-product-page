import { useState } from 'react';

interface PledgeModalProps {
  onClose: () => void;
  onPledge: (amount: number) => void;
}

const REWARDS = [
  {
    id: 'no-reward',
    title: 'Pledge with no reward',
    description:
      'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
    minPledge: 0,
  },
  {
    id: 'bamboo-stand',
    title: 'Bamboo Stand',
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    minPledge: 25,
    remaining: 101,
  },
  {
    id: 'black-edition',
    title: 'Black Edition Stand',
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    minPledge: 75,
    remaining: 64,
  },
  {
    id: 'mahogany',
    title: 'Mahogany Special Edition',
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    minPledge: 200,
    remaining: 0,
  },
];

export function PledgeModal({ onClose, onPledge }: PledgeModalProps) {
  const [selectedReward, setSelectedReward] = useState<string | null>(null);
  const [pledgeAmount, setPledgeAmount] = useState<number>(0);

  const handlePledgeSubmit = () => {
    if (selectedReward && pledgeAmount > 0) {
      const reward = REWARDS.find((r) => r.id === selectedReward);
      if (reward && pledgeAmount >= reward.minPledge) {
        onPledge(pledgeAmount);
      }
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 z-50 overflow-y-auto pt-24 pb-24'>
      <div className='bg-white rounded-lg max-w-[730px] w-full relative'>
        <div className='p-8 md:p-12'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-bold'>Back this project</h2>
            <button onClick={onClose} className='hover:opacity-70'>
              <img src='/icon-close-modal.svg' alt='Close modal' className='w-4 h-4' />
            </button>
          </div>

          <p className='text-gray-500 mb-8 leading-relaxed'>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
          </p>

          {REWARDS.map((reward) => {
            const isDisabled = reward.remaining === 0;
            const isSelected = selectedReward === reward.id;

            return (
              <div
                key={reward.id}
                className={`border-2 rounded-lg mb-6 transition-all ${
                  isDisabled
                    ? 'opacity-50'
                    : isSelected
                    ? 'border-moderate-cyan'
                    : 'hover:border-moderate-cyan border-gray-200'
                }`}>
                <button
                  className='w-full text-left p-8'
                  onClick={() => !isDisabled && setSelectedReward(reward.id)}
                  disabled={isDisabled}>
                  <div className='flex items-start gap-6'>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 transition-colors ${
                        isSelected ? 'border-moderate-cyan' : 'border-gray-300'
                      }`}>
                      {isSelected && (
                        <div className='w-full h-full rounded-full border-[6px] border-white bg-moderate-cyan' />
                      )}
                    </div>

                    <div className='flex-1'>
                      <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
                        <div className='flex items-center gap-4'>
                          <h3 className='font-bold hover:text-moderate-cyan transition-colors'>{reward.title}</h3>
                          {reward.minPledge > 0 && (
                            <span className='text-moderate-cyan font-medium'>Pledge ${reward.minPledge} or more</span>
                          )}
                        </div>
                        {reward.remaining !== undefined && (
                          <div className='flex items-center gap-2 mt-2 md:mt-0'>
                            <span className='text-2xl font-bold'>{reward.remaining}</span>
                            <span className='text-gray-500'>left</span>
                          </div>
                        )}
                      </div>

                      <p className='text-gray-500 leading-relaxed tracking-wide'>{reward.description}</p>
                    </div>
                  </div>
                </button>

                {isSelected && (
                  <div className='border-t-2 border-gray-100 p-8'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between'>
                      <p className='text-gray-500 md:mb-0 mb-4'>Enter your pledge</p>
                      <div className='flex flex-col md:flex-row items-center gap-4'>
                        <div className='relative'>
                          <span className='absolute left-6 top-1/2 -translate-y-1/2 text-gray-500'>$</span>
                          <input
                            type='number'
                            min={reward.minPledge}
                            value={pledgeAmount}
                            onChange={(e) => setPledgeAmount(Number(e.target.value))}
                            className='pl-10 pr-6 py-3 border-2 rounded-full w-28 text-center font-medium focus:border-moderate-cyan focus:outline-none hover:border-moderate-cyan transition-colors'
                          />
                        </div>
                        <button
                          onClick={handlePledgeSubmit}
                          className='px-8 py-3 bg-moderate-cyan text-white rounded-full font-medium hover:bg-dark-cyan transition-colors min-w-[120px]'>
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
