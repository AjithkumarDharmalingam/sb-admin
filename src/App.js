import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NestedExample from './components/NestedExample';
import Profile from './components/NestedComponents/Profile';
import Account from './components/NestedComponents/Account';
function App() {
  let data = {
    earningsMonthly:"40,000",
    earningsYearly:"2,15,000",
    task:"80",
    pandingRequest:"18"
  }

 
  return <div id="wrapper">
    <BrowserRouter>
    <Sidebar/>
    <Routes>
       <Route path='/dashboard' element={<Dashboard data={data}/>}/>
       <Route path='/add-user' element={<AddUser/>}/>
       <Route path='/edit-user/:id' element={<EditUser/>}/>
       <Route path='/nested-example' element={<NestedExample/>}>
          <Route path='account' element={<Account/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>  
       <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
    </Routes>
    </BrowserRouter>
</div>
}

export default App;
