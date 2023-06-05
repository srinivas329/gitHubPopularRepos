import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    languagesList: [],
    loading: false,
    failureMsg: true,
    optionID: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getRepositoryItem()
  }

  updateStateWithLanguage = id => {
    console.log(id)

    this.setState({optionID: id, loading: false}, this.getRepositoryItem)
  }

  getRepositoryItem = async () => {
    const {optionID} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${optionID}`,
    )
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.popular_repos.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        issuesCount: each.issues_count,
        starsCount: each.stars_count,
        id: each.id,
        name: each.name,
      }))

      this.setState({languagesList: updatedData, loading: true})
    } else {
      this.setState({failureMsg: true})
    }
  }

  renderRepositoryItems = () => {
    const {loading, languagesList} = this.state
    return (
      <div>
        {loading ? (
          <ul className="ul-list2">
            {languagesList.map(each => (
              <RepositoryItem repositoryDetails={each} key={each.id} />
            ))}
          </ul>
        ) : (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }

  renderFailureError = () => (
    <div className="failure-tab">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure"
        className="failure-img"
      />
      <h1 className="failure-heading">Something Went Wrong</h1>
    </div>
  )

  render() {
    const {failureMsg} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Popular</h1>
          <ul className="ul-list">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                updateStateWithLanguage={this.updateStateWithLanguage}
                languageDetails={each}
                key={each.id}
              />
            ))}
          </ul>
          {!failureMsg
            ? this.renderFailureError()
            : this.renderRepositoryItems()}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
