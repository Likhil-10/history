import './index.css'

const History = props => {
  const {onDelete} = props
  const {historyDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const ondelete = () => {
    onDelete(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="image" />
      <p className="title">{title}</p>
      <p className="domainUrl">{domainUrl}</p>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <button
        onClick={ondelete}
        className="lefft"
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteicon"
        />
      </button>
    </li>
  )
}

export default History
