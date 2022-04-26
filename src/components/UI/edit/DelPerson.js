import React from 'react';

class DelPerson extends React.Component{
    state ={
        target: true
    };

    delPerson = (e) =>{
        e.preventDefault();
        if (this.state.target === true){
            this.props.delPers(this.props.index)
        }
    }

    backB = () =>{
        this.setState({target: false});
    }

    delB = () =>{
        this.setState({target: true});
    }

    render() {
        return(
            <form onSubmit={this.delPerson}>
                <h1>Удаление сотрудника</h1>
                <p>Имя: {this.props.pers.firstN}</p>
                <p>Фамилия: {this.props.pers.lastN}</p>

                <button onClick={() => {
                    this.delB()
                    this.props.activeMod()
                    this.props.toast()
                }}
                >Удалить</button>

                <button onClick={() => {
                    this.backB()
                    this.props.activeMod()
                }}
                >Назад к таблице</button>
            </form>
        );
    }

}

export default DelPerson;