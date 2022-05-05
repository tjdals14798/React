import './App.css';
import React, { useState,useRef } from 'react';
//import Hello from './com/Hello'
import Wrapper from './com/Wrapper';
import Counter from './com/Counter';
import UserList from './com/UserList';
import Createuser from './com/CreateUser';

function App() {

  const [inputs,setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { username, email } = inputs;
  const onChange = (e) =>{
    const { value, name } = e.target; //우선 e.target에서 name 과 value를 추출
    setInputs({
        ...inputs,  //기존의 input 객체를 복사
        [name]:value    //name키를 가진 값을 value로 설정
    });
};

  const [users,setUsers] = useState([
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
  ]);
  
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    
    setUsers([...users,user]);// spred
    // setUsers(users.concat(user)); //concat 둘 중 하나 사용.

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }

  const onRemove = id =>{
    setUsers(users.filter(user => user.id !==id));
    //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만든다.
    //= user.id가 id인 것을 삭제
  }

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user
      )
    );
  };

  return (
      <Wrapper>
        {/* <Hello name="react" color="red" isSpecial/> */}
        {/* <Hello color="blue"/> */}
        <Createuser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        <Counter />
      </Wrapper>
  );
}

export default App;
