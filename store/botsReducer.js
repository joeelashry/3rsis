// store/botsReducer.js
const initialState = {
    bots: [], // Your initial state here
  };
  
  const botsReducer = (state = initialState, action) => {
    switch (action.type) {
      // Handle actions here
      default:
        return state;
    }
  };
  
  export default botsReducer; // Ensure you're using default export if you use default import
  