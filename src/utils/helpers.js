export const alreadyAnswered = (question, user) =>
    question.optionOne.votes.includes(user)
    || question.optionTwo.votes.includes(user)