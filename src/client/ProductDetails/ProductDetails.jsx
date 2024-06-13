import React from 'react'
import styles from './ProductDetails.module.css';
import { Link} from 'react-router-dom';
import product_image from '../assets/products/sanitizer-400x400.jpg';
import coffee_asorted from "../assets/products/coffee-asorted.jpg";
import edible_oil from "../assets/products/edible-oil-400x400.jpg";
import red_chillies from "../assets/products/red-chillies-400x400.jpg";
import sanitizer from "../assets/products/sanitizer-400x400.jpg";

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

const ProductDetils = () => {
  
  const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className={styles.feature_card}>
        <div className={styles.icon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  const ProductCard = ({ image, title, category, price, rating, salePrice }) => {
    return (
      <div className={styles.product_card}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p className={styles.category}>{category}</p>
        <div className={styles.rating}>
          {Array(5).fill(null).map((_, i) => (
            <span key={i} className={styles.star}>
              ★
            </span>
          ))}
        </div>
        <p className={styles.price}>
          {salePrice ? (
            <>
              <span className={styles.original_price}>{price}</span>
              <span className={styles.sale_price}>{salePrice}</span>
            </>
          ) : (
            price
          )}
        </p>
      </div>
    );
  };
  
  return (
    <div className={styles.home_container}>
    <div className={styles.home_section}>
      <img
        src={product_image}
        alt="Organic products"
        className={styles.home_image}
      />
      <div className={styles.home_content}>
        <h1 className={styles.home_title}>Hand Sanitizer</h1>
        <p className={styles.home_description}>
        Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.
        </p>
        <h1 className={styles.home_price}>£15.00</h1>
        <Link to="/shop" className={styles.home_button}>
          Add to cart
        </Link>
      </div>
    </div>
    <div className={styles.best_selling_products}>
    <h2>Related products</h2>
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  </div>
</div>
  )
}

export default ProductDetils