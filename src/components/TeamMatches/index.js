// Write your code here;
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    iplTeamData: [],
  }

  async componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    let data = await response.json()

    data = {
      latestMatchDetails: data.latest_match_details,
      teamBannerUrl: data.team_banner_url,
      recentMatches: data.recent_matches,
    }

    const {latestMatchDetails} = data

    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    data = {
      latestMatchDetails: updatedLatestMatchDetails,
      ...data,
    }

    const {recentMatches} = data

    const updatedRecentMatches = recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    const updateData = {
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      teamBannerUrl: data.teamBannerUrl,
    }
    this.setState({
      isLoading: false,
      iplTeamData: updateData,
    })
  }

  activeTeam = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return id.toLowerCase()
  }

  render() {
    const {isLoading, iplTeamData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = iplTeamData
    const activeTeam = this.activeTeam()
    console.log(recentMatches)

    return (
      <div className={`team-matches-container ${activeTeam}`}>
        {isLoading ? (
          <div className="loader">
            <Loader type="Ovel" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="responsive-container">
            <img alt="team banner" className="team-image" src={teamBannerUrl} />
            <p className="latest-matches">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="match-card-container">
              {recentMatches.map(eachRecentMatch => (
                <MatchCard
                  key={eachRecentMatch.id}
                  eachRecentMatch={eachRecentMatch}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
