import React from 'react';
import { BsLaptop, BsPhone, BsChevronRight } from 'react-icons/bs';
import './ProductGrid.css';

const ProductGrid = () => {
  const products = [
    {
      title: "Ultra Notebook",
      description: "Thin, light, and powerful",
      icon: <BsLaptop size={100} />,
      bgColor: "#f5f5f7"
    },
    {
      title: "Advanced Smartphone",
      description: "Next-generation technology",
      icon: <BsPhone size={100} />,
      bgColor: "#fafafa"
    }
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="product-card" 
          style={{ backgroundColor: product.bgColor }}
        >
          <div className="product-icon">{product.icon}</div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="product-links">
            <a href="#">Learn more <BsChevronRight size={14} /></a>
            <a href="#">Buy <BsChevronRight size={14} /></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;