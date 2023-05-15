import React, { useState, useEffect } from 'react';
import '../css/users-style.css'
import JSON from '../json/users.json'
import User from './user'

    class Users extends React.Component{

            render(){
                if(this.props.users.length > 0){
                    return(
                    <div className='users'>
                             {this.props.users.map((element, index)=>(
                                    <User onDelete={this.props.onDelete} key={element.id} user={element} onEdit={this.props.onEdit}/>
                            ))}
                    </div>
            )}else{
                return(
                    <div className='users'> Not users</div>
                    )
            }
        }
    }
export default Users;