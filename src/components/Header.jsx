import './Header.css'

const Header = (props) => {
  return (
    <div className="header">
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
        <h5>Number of cards: {props.num}</h5>
    </div>
  )
}

export default Header;