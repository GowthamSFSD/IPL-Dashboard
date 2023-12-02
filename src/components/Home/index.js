import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const url = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    iplDashboardData: [],
    isLoading: true,
  }

  async componentDidMount() {
    const response = await fetch(url)
    const data = await response.json()
    const {teams} = data
    const updateData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({
      isLoading: false,
      iplDashboardData: updateData,
    })
  }

  render() {
    const {isLoading, iplDashboardData} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader">
              <Loader type="Oval" color="#ffffff" height={50} />
            </div>
          </div>
        ) : (
          <>
            <div className="heading-container">
              <img
                alt="ipl logo"
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="team-container">
              {iplDashboardData.map(teamData => (
                <TeamCard teamData={teamData} key={teamData.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
