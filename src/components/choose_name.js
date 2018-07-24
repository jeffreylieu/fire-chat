import React, {Component} from 'react';


class ChooseName extends Component {
    state = {
        name: '',
        color: '#fff'
    }
    render(){
        return(
            <div>
                <h1 className="center">Pick User Name</h1>
                <h5 className="center">and Favortie Color</h5>
                <form>

                </form>
            </div>
        )
    }
}

export default ChooseName;