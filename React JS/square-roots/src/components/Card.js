import React from 'react'
import { connect } from 'react-redux'
//connect = conect to the redux store
import { deleteCard, fetchUsers } from '../actions/cardActions'

class Card extends React.Component {
  // state = { user : '' }

  componentDidMount() {
    this.props.fetchUsers()
  }

  onButtonClick = () => {
    let id = this.props.card.id
    this.props.deleteCard(id)

    this.props.history.push('/contact')
    // after the card is deleted, will redirect back to the contact page
  }

  render() {
    // console.log(this.props.users);
    // const { user } = this.state
    console.log(this.props)
    const { users } = this.props
    return users.map((user) => {
      return (
        <div
          className="ui raised very padded text container segment"
          style={{ marginTop: '80px' }}
          key={user.id}
        >
          <h3 className="ui header">{user.name}'s Card (≧.≦❁)β</h3>
          <p>{user.email}</p>
          <button
            className="ui primary right floated button"
            onClick={this.onButtonClick}
          >
            Delete
          </button>
        </div>
      )
    })
  }
}
const mapStateToProps = (state, ownProps) => {
  let title = ownProps.match.params.user
  return {
    card: state.cards.find((card) => card.title === title),
    users: state.users,
    // creating individual cards using the find method
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {
      dispatch(deleteCard(id))
    },
    fetchUsers: () => {
      dispatch(fetchUsers())
    },
    // dispatch = send action to the reducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
