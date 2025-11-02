import { useEffect, useMemo, useState } from "react";
import { Select, Empty } from "antd";
import styles from "@/styles/pages/categoryPage.module.scss";
import ProductCard from "@/Components/Products/ProductCard";
import { products as productData } from "@/data/products.ts";
import { allCategories } from "@/data/categories";
import { useSearchParams } from "react-router";
import type { ProductCardProps } from "@/types/product/productCard";
import SectionTitle from "@/Components/Home/SectionTitle";
import SEO from "@/Components/SEO";


const CategoryPage = () => {

  const [sortBy, setSortBy] = useState<"price" | "popularity" | "">("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category")?.toLowerCase();
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);


  console.log(searchParams.get("category"));

  const categories = useMemo(() => {
    return ["All", ...allCategories];
  }, []);



  const filteredProducts = useMemo(() => {
    let products: ProductCardProps[] = [...productData];
    if (selectedCategory !== "All") {
      products = products.filter((p) => p.category === selectedCategory.toLowerCase());
    }

    if (sortBy === "price") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "popularity") {
      products.sort((a, b) => b.reviews - a.reviews);
    }

    return products;
  }, [selectedCategory, sortBy]);

  return (
    <>
      <SEO
        title="All Products | Exclusive"
        description="Browse all the latest collections and premium products on Exclusive. Find deals, top categories, and trending items."
        url="https://exclusive-store.com/products"
      />
    <section className={styles.categoryPage}>
      <div className="container">

        <div className={styles.header}>
          <SectionTitle title={`${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} - Products`} />

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
          {filteredProducts.length > 0 && (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} prefrences={{ hoverable: true }} />
            ))
          ) }
        </div>
            
        {filteredProducts.length === 0 && 
            <Empty style={{width:"100%", justifyContent:"center"}} description="No products found." />
        }
      </div>

    </section>
    </>
  );
};

export default CategoryPage;
