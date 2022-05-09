import React, { useCallback, useMemo, useReducer, useRef } from "react";
import UserList from "./com/UserList";
import CreateUser from "./com/CreateUser";
import Wrapper from "./com/Wrapper";
import useInputs from "./com/UseInputs";

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
  }

const initialState = {
    users: [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active: true
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active: false
        }
      ]
    };

    function reducer(state, action){
        switch (action.type){
            case 'CREATE_USER':
                return{
                    inputs: initialState.inputs,
                    users: state.users.concat(action.user)
                };
            case 'TOGGLE_USER':
                return{
                    ...state,
                    users: state.users.map(user =>
                        user.id === action.id ? {...user,active: !user.active} : user
                    )
                };
            case 'REMOVE_USER':
                return{
                    ...state,
                    users: state.users.filter(user => user.id !==action.id)
                };
            default:
                return state;
        }
        
    }

export const UserDispatch = React.createContext(null);

function AppReducer(){
    const [{ username, email}, onChange, reset] = useInputs({
        username:'',
        email:''
    });
    const [state,dispatch] = useReducer(reducer,initialState);
    const nextId = useRef(4);

    const {users} = state;

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user:{
                id: nextId.current,
                username,
                email
            }
        });
        reset();
        nextId.current += 1;
    },[username,email,reset]);

    const count = useMemo(() => countActiveUsers(users),[users]);

    return(
        <UserDispatch.Provider value={dispatch}>
            <Wrapper>
                <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
                <UserList users={users} />
            <div>활성사용자 수 : {count}</div>
            </Wrapper>
        </UserDispatch.Provider>
      )
}

export default AppReducer;