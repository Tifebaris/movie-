import Image from "next/image"

export default function Movies({list}) {
    const movieList = list.map(movies => (
        <section>
            <Image src={movies.image} alt={movies.name} height={200} width={400} />
            <h2>{movies.name}</h2>
            <h2>{movies.year}</h2>
            <h2>{movies.director}</h2>
            <h2>{movies.synopsis}</h2>
        </section>
    ))
  return (
    <div className="grid grid-cols-2 gap-2 bg-black text-white pt-8 py-8">
        {movieList}
        </div>
  )
}
