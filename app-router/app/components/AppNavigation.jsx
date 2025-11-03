import Link from "next/link";
import styles from "./AppNavigation.module.css";

// /components <- 진입 안됨

export default function AppNavigation() {
    return (
        <div>
            <Link href="/" className={styles.link}>홈</Link> |
            <Link href="/login" className={styles.link}> 로그인</Link>
        </div>
    )
}