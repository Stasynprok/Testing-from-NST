import React from 'react';

class EditPes extends React.Component{
    state ={
        target: true
    };



    editPerson = (e) =>{
        e.preventDefault()
        if (this.state.target === false  || !(/\d/.test(e.currentTarget.value))){
            const updatePerson = {
                ...this.props.pers,
                [e.currentTarget.name]: e.currentTarget.value
            }

            this.props.editPers(this.props.index, updatePerson)
        }
    }



    backB = () =>{
        this.setState({target: false});
    }

    saveB = () =>{
        this.setState({target: true});
    }

    render() {
        return(
            <div>
                <h1>Редактирование сотрудника</h1>
                <input onChange={this.editPerson} name='firstN' type="text" placeholder='Имя' value={this.props.pers.firstN}/>
                <input onChange={this.editPerson} name ='lastN' type="text" placeholder='Фамилия' value={this.props.pers.lastN}/>

                <button onClick={() => {
                    this.saveB();
                    this.props.activeMod()
                    this.props.toast()
                }}>Сохранить</button>

                <button onClick={() => {
                    this.backB();
                    this.props.activeMod()
                }} >Назад к таблице</button>
            </div>
        );
    }


}

export default EditPes;