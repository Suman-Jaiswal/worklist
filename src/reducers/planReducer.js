import { v1 as uuid } from 'uuid'
export const planReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_PLAN':
            return [...state, {
                title: action.plan.title,
                description: action.plan.description,
                topics: action.plan.topics,
                id: uuid()
            }]

        case 'DELETE_PLAN':
            return state.filter(plan => plan.id !== action.id)

        case 'UPDATE_PLANS':
            return action.updatedPlans

        default:
            return state;
    }
}