import React from 'react';

interface IStars {
  rating: number;
  extraStyle?: string
}

const Stars: React.FC<IStars> = ({ rating , extraStyle }) => {
  const percent = (rating / 5) * 100;

  return (
    <div
      className={`inline-block text-[30px] font-[Times] leading-none ${extraStyle}`}
      aria-label={`Rating of this product is ${rating} out of 5`}
    >
      <div
        className="relative"
        style={{
          background: `linear-gradient(90deg, #fa9747 ${percent}%, #fff ${percent}%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 1px #fa9747)', 
        }}
      >
        ★★★★★
      </div>
    </div>
  );
};

export default Stars;
