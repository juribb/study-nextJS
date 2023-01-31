import "../styles/globals.css"
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps} : any) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps}/>
            <span>hello</span>
            <style jsx global>{`
                a {
                    color : white;
                }
            `}</style>
        </div>
    )
}