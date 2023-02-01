import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter();
    return ( 
    // css module을 사용할 땐 className을 오브젝트 프로퍼티 형식으로 적어야 하며, 하나 이상의 className을 갖게 하려면 문자열로 만들어줘야 한다.
    <nav>
        {/* css module */}
        {/* 
        <Link legacyBehavior href="/">
            <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>home</a>
        </Link>
        <Link legacyBehavior href="/posts/first-post">
            <a className={[styles.link, router.pathname === "/posts/first-post" ? styles.active : ""].join(" ")}>post</a>
        </Link> 
        */}
        
        {/* styled jsx */}
        {/* 부모나 자식 컴포넌트에서 스타일 클래스 명이나 태그명이 중복되더라고 영향을 미치지 않는다. */}
        <Link legacyBehavior href="/">
            <a className={router.pathname === "/" ? "active" : ""}>home</a>
        </Link>
        <Link legacyBehavior href="/posts/first-post">
            <a className={router.pathname === "/posts/first-post" ? "active" : ""}>first-post</a>
        </Link>
        <style jsx>{`
            a {
                text-decoration : none;
            }
            .active {
                color : tomato;
            }
        `}</style>
    </nav>
    );
  }