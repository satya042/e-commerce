import React from 'react'
import "./BestSellingProd.css";
import coffee_asorted from "../assets/products/coffee-asorted.jpg";
import edible_oil from "../assets/products/edible-oil-400x400.jpg";
import red_chillies from "../assets/products/red-chillies-400x400.jpg";
import sanitizer from "../assets/products/sanitizer-400x400.jpg";
import ProductCard from "../Products/ProductCard/ProductCard";

function BestSellingProd() {
    const products = [
        {
          image: coffee_asorted,
          title: 'Assorted Coffee',
          category: 'Groceries',
          price: '£35.00',
          rating: 4,
        },
        {
          image: sanitizer,
          title: 'Hand Sanitizer',
          category: 'Groceries',
          price: '£15.00',
          rating: 3,
        },
        {
          image: red_chillies,
          title: 'Handpicked Red Chillies',
          category: 'Groceries',
          price: '£19.00',
          rating: 5,
        },
        {
          image: edible_oil,
          title: 'Natural Extracted Edible Oil',
          category: 'Groceries',
          price: '£34.00',
          salePrice: '£25.00',
          rating: 4,
        },
      ];
  return (
    <div className="best-selling-products">
    <div className="best-selling-products-titl">Best Selling Products</div>
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  </div>
  )
}

export default BestSellingProd