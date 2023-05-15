import React from 'react';
import Users from './component/users';
import AddUser from './component/addUser';
import axios from 'axios';

const baseUrl = 'https://reqres.in/api/users?page=1';

    class App extends React.Component{
      constructor(props){
        super(props)

        axios.get(baseUrl).then((res)=>{
          this.setState({users: res.data.data})
        })

          this.state = {
            users:[
              
            ]
          }
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
      }
  
      render() {
          return(
            [
            <main>
              <Users users = {this.state.users} onDelete = {this.deleteUser} onEdit = {this.editUser} />
            </main>,
            <aside>
              <AddUser onAdd = {this.addUser}/>
            </aside>
            ]
          )
      }

      deleteUser(id){
          this.setState({
            users: this.state.users.filter((el) => el.id !== id)
          })
      }

      addUser(user){
          const id = this.state.users.length + 1;
          this.setState({users: [...this.state.users, {id, ...user}]})
          
      }

      editUser(user){
        let allUsers = this.state.users;
        allUsers[user.id - 1] = user;
        this.setState({users: []}, ()=>{
          this.setState({users: [...allUsers]})
          
        })
      }
    }

export default App