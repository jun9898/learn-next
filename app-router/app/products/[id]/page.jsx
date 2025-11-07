import Image from "next/image";
import styles from "./page.module.css";

const apiUrl = "https://app-router-api-five.vercel.app/api/products";

/** 상품 상세 페이지 */
async function fetchProduct(productId) {
    const response = await fetch(`${apiUrl}/${productId}`);
    const data = await response.json();
    return data;
}




export default async function ProductDetail({ params }) {
    const { id } = await params;
    const product = await fetchProduct(id);

    const showAlert = () => {
        alert("장바구니에 담겼습니다!");
    }

    return (
        <div className={styles.container}>
            <div className={styles.product_detail}>
                <div className={styles.image_section}>
                    <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        sizes="(max-width: 920px) 100vw, 50vw"
                        priority
                    />
                </div>

                <div className={styles.info_section}>
                    <div className={styles.product_header}>
                        <span className={styles.product_category}>Premium Product</span>
                        <h1 className={styles.product_title}>{product.name}</h1>
                    </div>

                    <p className={styles.product_price}>
                        ₩{product.price.toLocaleString()}
                    </p>

                    <div className={styles.divider}></div>

                    <p className={styles.product_description}>
                        {product.description || "고품질의 프리미엄 상품입니다. 엄선된 소재와 정교한 제작 과정을 거쳐 만들어진 제품으로, 뛰어난 품질과 디자인을 자랑합니다."}
                    </p>

                    <div className={styles.product_meta}>
                        <div className={styles.meta_item}>
                            <span className={styles.meta_label}>배송</span>
                            <span className={styles.meta_value}>무료배송</span>
                        </div>
                        <div className={styles.meta_item}>
                            <span className={styles.meta_label}>재고</span>
                            <span className={styles.meta_value}>재고 있음</span>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button className={`${styles.button} ${styles.button_primary}`} onClick={showAlert}>
                            장바구니 담기
                        </button>
                        <button className={`${styles.button} ${styles.button_secondary}`}>
                            바로 구매
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}