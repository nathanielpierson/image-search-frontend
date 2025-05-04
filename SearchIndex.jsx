export function SearchIndex ( {cast} ) {
  console.log("in SearchIndex")
  console.log (cast)
  console.log("in SearchIndex")
  return (
    <div>
      {cast.map((cast) => (
        <div key={cast.id}>
        <p>{cast.fullName}</p>
        </div>
      ))}
      <p>search index</p>
    </div>
  )
}