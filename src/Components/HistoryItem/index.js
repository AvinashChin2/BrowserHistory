import './index.css'

const HistoryItem = props => {
  const {historyItems, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItems
  const OnDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="items-container">
      <div className="item">
        <p className="time">{timeAccessed}</p>
        <div className="apps">
          <img src={logoUrl} alt="domain logo" className="logo-image" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button
        className="delete-container"
        onClick={OnDeleteItem}
        type="button"
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
