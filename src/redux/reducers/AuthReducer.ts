  
  type Auth = {
    isLoggedIn:boolean;
  }

  const INITIAL_STATE:Auth = {
    isLoggedIn:false,
  };
  
  const authReducer = (state = INITIAL_STATE, action:any) => {
      switch (action.type) {
          case "LOGIN":
             return {
               ...state, 
               isLoggedIn:true,
            };
            case "LOGOUT":
              return {
                ...state, 
                isLoggedIn:false
            };
           default: return state;
      }
  };
  
  export default authReducer;