import { useMemo, useState } from "react";
import styles from "@/styles/pages/categoryPage.module.scss";
import ProductCard from "@/Components/Products/ProductCard";
import { products as productsData } from "@/data/products.ts";
import { Select } from "antd";
import { allCategories } from "@/data/categories";
const CategoryPage = () => {

  const [sortBy, setSortBy] = useState<"price" | "popularity" | "">("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");


  const categories = useMemo(() => {
    return ["All", ...allCategories];
  }, []);


  const filteredProducts = useMemo(() => {
    let products = [...productsData];
    if (selectedCategory !== "All") {
      products = products.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === "price") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "popularity") {
      products.sort((a, b) => b.reviews - a.reviews);
    }

    return products;
  }, [selectedCategory, sortBy]);

  return (
    <section className={styles.categoryPage}>
      <div className="container">

        <div className={styles.header}>
          <h2>Categories</h2>

          <div className={styles.controls}>
            <Select
              size="large"
              defaultValue={selectedCategory}
              onChange={setSelectedCategory}
              style={{ width: 130 }}
              options={categories.map((category) => { return { value: category, label: category } })}
            />


            <Select
              size="large"
              defaultValue={sortBy}
              style={{ width: 180 }}
              onChange={(value) => setSortBy(value as "price" | "popularity" | "")}
              options={[{ value: "", label: "Sort by" }, { value: "price", label: "Price: Low to High" }, { value: "popularity", label: "Popularity" }]}
            />


          </div>
        </div>

        <div className={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} prefrences={{ hoverable: true }} />
            ))
          ) : (
            <p className={styles.noItems}>No products found.</p>
          )}
        </div>
      </div>

    </section>
  );
};

export default CategoryPage;
