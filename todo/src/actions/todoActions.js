// Action Types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED_TODO = "CLEAR_COMPLETED_TODO" 

// Action Creator
export const addTodo = (taskName) => {
    // Action
    console.log("Add Action: ", taskName);
    return({ type: ADD_TODO, payload: taskName });
}

// Action Creator
export const toggleTodo = (toggle) => {
    // Action
    console.log("Toggle Action: ", toggle);
    return({ type: TOGGLE_TODO, payload: toggle});
}

export const clearCompletedTodo = (clear) => {
    console.log("Clear Action: ", clear);
    return({ type: CLEAR_COMPLETED_TODO, payload: clear});
}


