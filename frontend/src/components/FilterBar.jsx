import { useState } from 'react';

const filters = [
  'everything',
  'tonight',
  'weekend',
  'free entry',
  'under ₹200',
  'music',
  'tech',
  'arts',
  'your college',
];

export default function FilterBar() {
  const [active, setActive] = useState('everything');

  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button
          key={f}
          className={`filter-pill ${active === f ? 'active' : ''}`}
          onClick={() => setActive(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
