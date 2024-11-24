interface RewardCardProps {
  title: string;
  pledge: string;
  description: string;
  remaining: number;
  onSelect: () => void;
}

export function RewardCard({ title, pledge, description, remaining, onSelect }: RewardCardProps) {
  const isOutOfStock = remaining === 0;

  return (
    <div
      className={`border rounded-lg p-6 md:p-8 mb-6 ${
        isOutOfStock ? 'opacity-50' : 'hover:border-moderate-cyan'
      }`}
    >
      <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
        <h3 className='text-lg font-bold mb-2 md:mb-0'>{title}</h3>
        <p className='text-moderate-cyan font-medium'>Pledge ${pledge} or more</p>
      </div>
      
      <p className='text-gray-500 mb-6'>{description}</p>
      
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center gap-2 mb-6 md:mb-0'>
          <span className='text-3xl font-bold'>{remaining}</span>
          <span className='text-gray-500'>left</span>
        </div>
        
        <button
          onClick={onSelect}
          disabled={isOutOfStock}
          className={`px-8 py-3 rounded-full font-medium ${
            isOutOfStock
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-moderate-cyan text-white hover:bg-dark-cyan transition-colors'
          }`}
        >
          {isOutOfStock ? 'Out of stock' : 'Select Reward'}
        </button>
      </div>
    </div>
  );
}
