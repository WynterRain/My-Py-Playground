const initialState = {
  cards: [
    {
      id: 1,
      title: 'Heona',
      body: 'Email ~ HeonaLiu@gmail.com ( NOTE :: Please DO NOT email me for unnecessary things unless important!! c: )',
    },
    {
      id: 2,
      title: 'KayB',
      body: 'Email ~ kaybTheMantouBaby@gmail.com ( NOTE :: Please DO NOT email the baby baer for unnecessary things unless important!! c: )',
    },
    {
      id: 3,
      title: 'Wowo',
      body: 'Email ~ WozieLobHeonaOverdose@gmail.com ( NOTE :: Please DO NOT email da wozie wubble bubble baby for unnecessary things unless important!! c: )',
    },
  ],
  users: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_CARD':
      let newCard = state.cards.filter((card) => {
        return action.id !== card.id
      })
      return {
        ...state,
        cards: newCard,
      }
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload,
      }

    default:
      return state
  }
}

export default rootReducer
