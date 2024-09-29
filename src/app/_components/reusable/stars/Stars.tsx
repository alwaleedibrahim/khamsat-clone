import React from 'react';

interface IStars {
  rating: number;
  extraStyle?: string
}

const Stars: React.FC<IStars> = ({ rating , extraStyle }) => {
  const percent = (rating / 5) * 100;

  return (
    <div
      className={`inline-block font-[Times] leading-none ${extraStyle}`}
      aria-label={`Rating of this product is ${rating} out of 5`}
    >
      <div
        className="relative"
        style={{
          background: `linear-gradient(270deg, #fa9747 ${percent}%, #fff ${percent}%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0.6px 0.6px 0.2px #fa9747)', 
        }}
      >
        ★★★★★
      </div>
    </div>
  );
};

export default Stars;
