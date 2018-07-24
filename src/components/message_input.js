import React, {Component} from 'react';


class MessageInput extends Component{
    state = { message: ''}

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.send(this.state.message);
        this.setState({message: ''});
    }

    render(){
        const {message} = this.state;
        return(
            <form className="row" onSubmit={this.handleSubmit}>
                <div className="class col-s8 offset-s2">
                    <label>
                        New Message
                    </label>
                    <input type="text" value={message} onChange={ event => this.setState({message: event.target.value})}/>
                </div>
            </form>
        )
    }
}

export default MessageInput;