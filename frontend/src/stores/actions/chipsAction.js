export const AddChipsAction = (chips) => ({
  type: "ADD_CHIPS",
  payload : chips
})

export const RemoveChipsAction = (chips) => ({
  type: "REMOVE_CHIPS",
  payload : chips
})

export const RemoveAllChipsAction = (chips) => ({
  type: "REMOVE_ALL_CHIPS",
  payload : chips
})