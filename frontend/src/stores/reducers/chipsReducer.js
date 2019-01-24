const initialState = {
  list: []
}

export default (state = initialState, {type, payload}) => {

  let list = state.list
  switch (type) {

  case "ADD_CHIPS":
    list.push(payload)
    return { ...state, list }

  case "REMOVE_CHIPS":
    list.splice(payload,1)
    return { ...state, list }
  
  case "REMOVE_ALL_CHIPS":
    list.splice(0, list.length)
    return { ...state, list }

  default:
    return state
  }
}
