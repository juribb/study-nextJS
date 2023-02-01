import "../styles/globals.css"
//import NavBar from "../components/NavBar";
//import NavBarMovie from "@/components/NavBarMovie";
import Layout from "@/components/Layout";
import { AppProps } from "next/app";

export default function App({ Component, pageProps} : AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}