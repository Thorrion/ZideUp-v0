export const challengeAction = (challenge) => ({
  type: 'ADD_CHALLENGE',
  payload: challenge
})

export const RemoveChallengeAction = (challenge) => ({
  type: "REMOVE_CHALLENGE",
  payload : challenge
})

export const AddIdeaAction = (idea, id) => ({
  type: "ADD_IDEA",
  payload : idea,
  id: id
})
