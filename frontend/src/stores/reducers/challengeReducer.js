const initialState = {
  list : []
}

export default (state = initialState, { type, payload, id }) => {
  let list = state.list
  switch (type) {

  case 'ADD_CHALLENGE':
    list.push(payload)
    return { ...state, list }

  case 'REMOVE_CHALLENGE':
    list.splice(payload,1)
    return { ...state, list }

  case 'ADD_IDEA':
    list[0].ideas.push(payload)
    return { ...state, list }

  default:
    return state
  }
}
