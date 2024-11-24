interface SuccessModalProps {
  onClose: () => void;
}

export function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-lg max-w-md w-full p-8 text-center'>
        <img src='/icon-check.svg' alt='Success' className='mx-auto mb-6' />
        <h2 className='text-xl font-bold mb-4'>Thanks for your support!</h2>
        <p className='text-gray-500 mb-6'>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
          email once our campaign is completed.
        </p>
        <button
          onClick={onClose}
          className='px-8 py-3 bg-moderate-cyan text-white rounded-full font-medium hover:bg-dark-cyan transition-colors'>
          Got it!
        </button>
      </div>
    </div>
  );
}
