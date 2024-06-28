import React from "react";
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import home_image from "../assets/ecom/organic-products-hero.png";
import home_leaf from "../assets/ecom/logo-leaf-new.png"

const features = [
  {
    icon: (<img src="https://cdn-icons-png.flaticon.com/512/1683/1683735.png" alt="truck" />),
    title: "Free Shipping",
    description: "Above $5 Only",
  },
  {
    icon: (<img src="https://cdn-icons-png.flaticon.com/512/3050/3050307.png" alt="organic" />),
    title: "Certified Organic",
    description: "100% Guarantee",
  },
  {
    icon: (<img src="https://cdn-icons-png.flaticon.com/512/4084/4084438.png" alt="money" /> ),
    title: "Huge Savings",
    description: "At Lowest Price",
  },
  {
    icon: ( <img src="https://cdn-icons-png.flaticon.com/512/1948/1948996.png" alt="return" />),
    title: "Easy Returns",
    description: "No Questions Asked",
  },
];

export const Home = () => {

  const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className={styles.feature_card}>
        <div className={styles.icon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div className={styles.home_container}>
    <div className={styles.home_section}>
      <img
        src={home_image}
        alt="Organic products"
        className={styles.home_image}
      />
      <div className={styles.home_content}>
      <img
        src={home_leaf}
        alt="Organic products"
        className={styles.home_leaf}
      />
        <h1 className={styles.home_title}>Welcome to Our Organic Store</h1>
        <p className={styles.home_description}>
          Discover the finest organic fruits, vegetables, and groceries.
        </p>
        <Link to="/shop" className={styles.home_button}>
          Shop Now
        </Link>
      </div>
    </div>
    <div className={styles.app}>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </div>

  );
};
