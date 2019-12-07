import React from "react";

export default function Category({ category }) {
  return (
    <li data-filter={".cat" + category.id} className="categories__item">
      {category.category}
    </li>
  );
}
