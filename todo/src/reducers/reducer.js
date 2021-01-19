import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED_TODO } from '../actions/todoActions.js';

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_TODO):
            return [
                ...state,
                {
                    task: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        case(TOGGLE_TODO):
            return state.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task)
        case(CLEAR_COMPLETED_TODO):
            return state.filter(task => !task.completed)
        default:
            return state
    }
};