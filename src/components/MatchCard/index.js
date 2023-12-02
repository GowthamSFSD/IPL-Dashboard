// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachRecentMatch} = props
  console.log(eachRecentMatch)
  const {
    id,
    competingTeam,
    matchStatus,
    result,
    competingTeamLogo,
  } = eachRecentMatch

  const resultClass = matchStatus === 'Won' ? 'won' : 'loss'
  return (
    <li key={id} className="match-card">
      <div className="match-responsive-container">
        <img
          className="match-card-team-logo"
          alt={`competing team ${competingTeam}`}
          src={competingTeamLogo}
        />
        <p className="competing-team">{competingTeam}</p>
        <p className="team-result">{result}</p>
        <p className={resultClass}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
