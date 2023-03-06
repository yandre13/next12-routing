import Image from 'next/image'
import Link from 'next/link'

export default function Pokemon({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      <div>
        <Link href="/">back to home</Link>
      </div>
      <div>
        <Image
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
          alt={pokemon.name}
          width={200}
          height={200}
        />
      </div>
      <div>
        {pokemon.type.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div>
        {pokemon.stats.map((s) => (
          <div key={s.name}>
            <span>{s.name}</span>
            <span>{s.value}</span>
          </div>
        ))}
      </div>
    </>
  )
}
