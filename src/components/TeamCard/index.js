// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData
  return (
    <Link className="link-item" to={`/team-matches/${id}`}>
      <li className="team-card">
        <div className="logo-container">
          <img alt={name} src={teamImageUrl} className="team-logo" />
        </div>
        <div className="heading-container">
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
