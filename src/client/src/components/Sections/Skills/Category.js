import React from "react";

export default function Category({ category, active, toggleActiveCategory }) {
  return (
    <div
      className={
        active.includes(category.id)
          ? "categories__item categories__item_active"
          : "categories__item"
      }
      onClick={toggleActiveCategory}
    >
      {category.category}
    </div>
  );
}
