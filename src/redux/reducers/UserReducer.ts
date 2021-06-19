  
  type User = {
    id?:string;
    token?:string;
    role?:string | null;
    isLoggedIn?:boolean;

  }
  const INITIAL_STATE:User = {
    role:localStorage.getItem('role'),
    isLoggedIn:false,
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
            case "LOGIN":
              return {
                ...state, 
                isLoggedIn:true,
            };
            case "LOGOUT":
              return {
                ...state, 
                isLoggedIn:false,
            };
           default: return state;
      }
  };
  
  export default UserReducer;