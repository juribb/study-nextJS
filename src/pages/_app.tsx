import "../styles/globals.css"
//import NavBar from "../components/NavBar";
//import NavBarMovie from "@/components/NavBarMovie";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps} : any) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}