import './index.css'

const CardItem = props => {
  const {technologyDetails} = props

  const {title, description, imgUrl, className} = technologyDetails

  return (
    <li className={`list-card ${className}`}>
      <div className="list-ele">
        <h1>{title}</h1>
        <p>{description}</p>
        <img className="img-ele" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
