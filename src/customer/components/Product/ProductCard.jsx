import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <div className="productCard-container">
        <img
          className="productCard-image"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="textPart">
        <div>
          <p className="product-brand">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="product-price">
          <p className="discounted-price">₹{product.discountedPrice}</p>
          <p className="custom-price">₹{product.price}</p>
          <p className="discount-price">
            {product.disCountPercent}70% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard