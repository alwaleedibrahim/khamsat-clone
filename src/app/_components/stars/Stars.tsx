import React from 'react';

interface IStars {
  rating: number;
}

const Stars: React.FC<IStars> = ({ rating }) => {
  const percent = (rating / 5) * 100;

  return (
    <div
      className="inline-block text-[60px] font-[Times] leading-none"
      aria-label={`Rating of this product is ${rating} out of 5`}
    >
      <div
        className="relative"
        style={{
          background: `linear-gradient(90deg, #fc0 ${percent}%, #fff ${percent}%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 1px #fc0)', 
        }}
      >
        ★★★★★
      </div>
    </div>
  );
};

export default Stars;
