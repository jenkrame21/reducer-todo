// Action Types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED_TODO = "CLEAR_COMPLETED_TODO";

// Action Creator
export const addTodo = (todo) => {
    // Action
    // console.log("Add Action: ", todo);
    return({ type: ADD_TODO, payload: todo });
};

// Action Creator
export const toggleTodo = (todo) => {
    // Action
    // console.log("Toggle Action: ", todo);
    return({ type: TOGGLE_TODO, payload: todo});
};

// Action Creator
export const clearCompletedTodo = (todo) => {
    // Action
    // console.log("Clear Action: ", todo);
    return({ type: CLEAR_COMPLETED_TODO, payload: todo});
};

