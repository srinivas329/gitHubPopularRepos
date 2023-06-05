// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    avatarUrl,
    forksCount,
    issuesCount,
    starsCount,
    id,
    name,
  } = repositoryDetails
  return (
    <li className="list-item2">
      <img className="avatar" src={avatarUrl} alt={name} />
      <h1 className="name-heading">{name} </h1>
      <div className="counts-container">
        <img
          className="pngs"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
        />
        <p className="counts-text">{starsCount} stars</p>
      </div>
      <div className="counts-container">
        <img
          className="pngs"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
        />
        <p className="counts-text">{forksCount} forks</p>
      </div>
      <div className="counts-container">
        <img
          className="pngs"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="counts-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
