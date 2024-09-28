import React from "react";
import { FaStar } from "react-icons/fa";

export default function RatingInput({rating}: Readonly<{rating: number}>) {
  
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FaStar fill="#fa9747"/>);
    } else {
      stars.push(<FaStar fill="white"/>);
    }
  }
  return (
    <label htmlFor={`rating_${rating}`} className="flex">
      <input type="radio" name="rating" id={`rating_${rating}`} className="me-3" />
      <ul className="flex list-none me-2">
        {stars.map((star, index) => (
          <li key={index} className="me-1">{star}</li>
        ))}
      </ul>
      أو أكثر
    </label>
  );
}
