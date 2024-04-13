
export const GameCard = ({
  name,
  year,
  description,
  cover
}) => {
  return (
    <>
      <div className="card border-dark">
        <img src={cover} className="card-img-top animate__animated animate__fadeIn" alt={name}></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{year}</li>
          <li className="list-group-item">{description}</li>
        </ul>
        <div className="card-footer">
         
        </div>
      </div>
    </>
  )
}