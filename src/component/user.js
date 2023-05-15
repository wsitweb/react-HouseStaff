import React from 'react';
import AddUSer from './addUser'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

    class User extends React.Component{
        user = this.props.user;
        imgUrlOne = 'https://em-content.zobj.net/source/noto-emoji-animations/344/slightly-smiling-face_1f642.gif';
        imgUrlTwo = 'https://em-content.zobj.net/source/noto-emoji-animations/344/pensive-face_1f614.gif';

        constructor(props){
            super(props)
            this.state = {
                editForm: false
            }
        }

        render(){
            return(
                <div className={'user '+ this.user.id}>              
                    <img className='user__icon' src={this.user.avatar}></img>
                    <h4 className='user__firstName'><b>Name:</b> {this.user.first_name || 'Not first Name'}</h4>
                    <h5 className='user__lastName' ><b>Last name:</b> {this.user.last_name || 'Not last Name'}</h5>
                    <div className='user__info info'>
                        <p className='info__age'><b>age: </b>{this.user.age || 'Not info'}</p>
                        <p className='info__bio'><b>Mail:</b> {this.user.email || 'Not mail'}</p>
                    </div>
                    <div className='user__edit'>
                        <IoHammerSharp onClick={()=>{
                            this.setState({
                                editForm: !this.state.editForm
                            });
                        }} className='edit-icon'/>
                        <IoCloseCircleSharp className='delete-icon' onClick={()=> {this.props.onDelete(this.user.id)}}/>
                    </div>
                    {this.state.editForm && <AddUSer user={this.user} onAdd={this.props.onEdit} />}
            </div>
            )
        }
    }
export default User;