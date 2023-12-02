// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  console.log(latestMatchDetails)
  return (
    <div className="latest-match-container">
      <div className="responsive-latest-container">
        <div className="latest-match-details-card-container">
          <div className="details-card-and-image-card-container">
            <div className="detail-card">
              <p className="opponent-team">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="stadium">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <div className="image-card">
              <img
                alt={`latest match ${competingTeam}`}
                src={competingTeamLogo}
                className="opponent-logo"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="balance-details-container">
            <p className="normal">First Innings</p>
            <p className="small">{firstInnings}</p>
            <p className="normal">Second Innings</p>
            <p className="small">{secondInnings}</p>
            <p className="normal">Man of the Match</p>
            <p className="small">{manOfTheMatch}</p>
            <p className="normal">Umpires</p>
            <p className="small">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
