interface ProjectStatsProps {
  stats: {
    totalRaised: number;
    totalBackers: number;
    daysLeft: number;
    goal: number;
  };
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  const progress = (stats.totalRaised / stats.goal) * 100;

  return (
    <div className='bg-white rounded-lg p-6 md:p-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200'>
        <div className='pt-6 md:pt-0'>
          <p className='text-3xl md:text-4xl font-bold mb-2'>
            ${stats.totalRaised.toLocaleString()}
          </p>
          <p className='text-gray-500'>of ${stats.goal.toLocaleString()} backed</p>
        </div>
        <div className='pt-6 md:pt-0'>
          <p className='text-3xl md:text-4xl font-bold mb-2'>
            {stats.totalBackers.toLocaleString()}
          </p>
          <p className='text-gray-500'>total backers</p>
        </div>
        <div className='pt-6 md:pt-0'>
          <p className='text-3xl md:text-4xl font-bold mb-2'>{stats.daysLeft}</p>
          <p className='text-gray-500'>days left</p>
        </div>
      </div>
      
      <div className='mt-8'>
        <div className='w-full h-3 bg-gray-100 rounded-full overflow-hidden'>
          <div
            className='h-full bg-moderate-cyan rounded-full transition-all duration-500 ease-out'
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
