import React from 'react'

class AddUSer extends React.Component {
    userAdd = {}
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            age: '',
            email: '',
            isHeppy: false,
        }
    }
    render(){
        return(
                <form ref={(el)=>this.myForm = el}>
                    <input placeholder = 'Имя' onChange={e=>this.setState({first_name: e.target.value})}/>
                    <input placeholder = 'Фамилия' onChange={e=>this.setState({last_name: e.target.value})}/>
                    <input placeholder = 'Возраст' onChange={e=>this.setState({age: e.target.value})}/>
                    <input placeholder = 'email' onChange={e=>this.setState({email: e.target.value})}/>
                    <div>
                        <label htmlFor='isHappy' onChange={e=>this.setState({isHeppy: e.target.checked})}>Счастлив</label>
                        <input type='checkbox' id='isHappy' onChange={e=>this.setState({isHeppy: e.target.checked})}/>
                    </div>
                    <button type='button' onClick={()=>{
                        this.myForm.reset();
                        this.userAdd = {
                            first_name: this.state.first_name,
                            last_name: this.state.last_name,
                            age: this.state.age,
                            email: this.state.email,
                            isHappy: this.state.isHeppy,
                        }
                        
                            if(this.props.user){this.userAdd.id = this.props.user.id}
                            this.props.onAdd(this.userAdd)
                        }
                        }>Добавить</button>
                </form>
            )
    }
}
export default AddUSer