import React from 'react';
import toast, {Toaster} from "react-hot-toast";

class InputPer extends React.Component{


    state ={
        target: false,
        targetBack: false
    };

    firstNRef = React.createRef();
    lastNRef = React.createRef();

    addPerson = (e) => {
        e.preventDefault();
        if (this.state.target === true){
            const person = {
                id: this.props.gen(),
                firstN: this.firstNRef.current.value,
                lastN: this.lastNRef.current.value
            }
            this.props.addPers(person);
            e.currentTarget.reset();
        } else if (this.state.targetBack === true) {
            e.currentTarget.reset();
            this.setState({targetBack: false})
        }
    }

    backB = () =>{
        this.setState({target: false})
        this.setState({targetBack: true})
    }

    saveB = () =>{

        if(!(/\d/.test(this.firstNRef.current.value)) && !(/\d/.test(this.lastNRef.current.value)) && this.lastNRef.current.value !== '' && this.firstNRef.current.value !== ''){
            this.setState({target: true});
            this.props.activeMod()
        } else {
            this.setState({target: false});
            if (this.lastNRef.current.value === '' || this.firstNRef.current.value === '') {
                toast.error('Заполните все поля!!!',
                    {
                        style:{
                            background: '#B22222',
                            color: 'white',
                        }
                    }
                )
            } else {
                toast.error('Имя и фамилия не должны содержать числа!',
                    {
                        style:{
                            background: '#B22222',
                            color: 'white',
                        }
                    }
                )
            }
        }

    }

   render() {
        return(
            <form onSubmit={this.addPerson}>
                <h1>Добавление сотрудника</h1>
                <input ref={this.firstNRef} name='first' type="text" placeholder='Имя'/>
                <input ref={this.lastNRef} name ='last' type="text" placeholder='Фамилия'/>
                <button onClick={() => {
                    this.saveB()
                }}>Сохранить</button>
                <button onClick={() => {
                    this.backB()
                    this.props.activeMod()
                }} >Назад к таблице</button>
                <Toaster position="bottom-center" reverseOrder={false}/>
            </form>
        )
   }

}

export default InputPer;