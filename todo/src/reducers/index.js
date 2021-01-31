import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED_TODO } from '../actions/index.js';

export const initialState = {
    tasks: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
};

export const reducer = (state, action) => {
    console.log('in Reducer', action)
    switch (action.type) {
        case ADD_TODO:
            return ({
                ...state,
                tasks: [...state.tasks, {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            });
        case TOGGLE_TODO:
            return ({
                ...state,
                tasks: state.tasks.map(todo => {
                    if (todo.id === action.payload) {
                        return ({
                            ...todo,
                            completed: (!todo.completed)
                        })
                    } else {
                        return todo;
                    }
                })
            });
        case CLEAR_COMPLETED_TODO:
            return ({
                ...state,
                tasks: state.tasks.filter(todo => {
                    return (!todo.completed);
                })
            })
        default:
            return state;
    }
};