  
  const INITIAL_STATE = {
    role:null,
  };
  
const UserReducer = (state = INITIAL_STATE, action:any) => {
      switch (action.type) {
          case "ADMIN":
             return {
               ...state, 
               role:"ADMIN"
            };
            case "DEVELOPER":
              return {
                ...state, 
                role:"DEVELOPER"
             };
           default: return state;
      }
  };
  
  export default UserReducer;