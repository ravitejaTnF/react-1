import { useState } from 'react';
import './App.css';
import Adduser from './components/Adduser/Adduser';
import Allusers from './components/Allusers/Allusers';
import Errormodal from './components/Errormodal/Errormodal';
const InITIAL_DATA = [];
function App() {
  const [usersList,updateUsersList] = useState(InITIAL_DATA);
  const updateUsersListHandler = (data) => {
    updateUsersList(prevData => {
      return [...prevData,data];
    })
  }
  return (
    <div className="App">
      <Adduser updateData={updateUsersListHandler}/>
      <Allusers users={usersList}/>
    </div>
  );
}
export default App;
