import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
const apiUrl = "https://app-router-api-five.vercel.app/api/products";
async function fetchProducts() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
/** 상품 목록 페이지 */
async function ProductList() {
  const products = await fetchProducts();
  console.log(products);
  return <div>
    <h1>상품 목록 페이지</h1>
    <div className={styles.productsGrid}>
      {products.map(product => {
        return (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className={styles.productCard}>
              <div className={styles.imageWrap}>
                <Image src={product.image_url} alt={product.name} width={300} height={300} />
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.productName}>{product.name}</h2>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  </div>;
}
export default ProductList;
