import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Seo from '@/components/Seo'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Home = ({results}:any) => {

  // const [movies, setMovies] = useState<any>();

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (
  //       await fetch(
  //         "/api/movies"
  //       )
  //     ).json();
  //     setMovies(results);
  //   })();
  // }, []);

  return (
    <>
      <div className="container">
      <Seo title="Home" />
      {results?.map((movie:any) => (
        <div className="movie" key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h4>{movie.original_title}</h4>
      </div>
      ))}
    </div>
    <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  )
}
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)).json();
  
    return {
      props:{
        results,
      }
    }

  
}

export default Home;
