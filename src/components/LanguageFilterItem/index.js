// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, updateStateWithLanguage} = props
  const {language, id} = languageDetails

  const onClickFilter = () => {
    updateStateWithLanguage(id)
  }

  return (
    <li className="list-item">
      <button className="button" onClick={onClickFilter} type="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
