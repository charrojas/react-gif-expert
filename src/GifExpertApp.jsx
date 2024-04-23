import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {/* Listado de Gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif item */}
    </div>
  );
};
