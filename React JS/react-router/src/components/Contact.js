import React from 'react'
import { Link } from 'react-router-dom'
// import Modal from './Modal'
import { connect } from 'react-redux'
// connect = higher order component

const Contact = ({ cards }) => {
  return (
    <div>
      {/* <Modal /> */}
      {cards.map((card) => {
        return (
          <div
            className="ui raised very padded text container segment"
            style={{ marginTop: '80px' }}
            key={card.id}
          >
            <Link to={`/${card.title}`} className="ui header">
              *~ ଘ(✿˵•́ ᴗ •̀˵)~ Contact {card.title}
            </Link>
            <p> {card.body}</p>
          </div>
        )
      })}
      {/* <div
            className="ui raised very padded text container segment"
            style={{ marginTop: '80px' }}
        >
            <Link to = '/Youtube' className="ui header"> *~(๑˘ᵕ˘)  YouTube!</Link>
            <p> Link ~ https://www.youtube.com</p>
        </div> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
}

export default connect(mapStateToProps)(Contact)
