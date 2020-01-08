import React from 'react';

export default function Category({ category }) {
  return (
    <li
      data-filter={category.name === 'All' ? 'all' : '.cat' + category.name}
      className="categories__item"
    >
      {category.name}
    </li>
  );
}
