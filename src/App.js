import React from "react";
import "./styles/App.css";
import toast, {Toaster} from "react-hot-toast";
import Modal from "./components/UI/modal/Modal";
import TableItem from "./components/TableItem";
import PersItem from "./components/PersItem";
import InputPer from "./components/UI/input/InputPer";

class App extends React.Component{
    state = {
        persons: {},
        active: false
    };

    componentDidMount() {
        const localStorageRef = localStorage.getItem('persons')
        if(localStorageRef){
            this.setState({ persons: JSON.parse(localStorageRef)})
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('persons', JSON.stringify(this.state.persons))
    }


    generateID = () => {
        let indexId = []
        Object.keys(this.state.persons).map(key =>{
           return indexId.push(this.state.persons[key].id)
        })
        indexId.sort((a, b) => a - b)

        if(Object.keys(this.state.persons).length === 0){
            return 1
        } else {
            if(!indexId.includes(1)){
                return 1
            }
            for(let i = 0; i < indexId.length; i++){
                if(indexId[i] !== (indexId[i+1] -1)){
                    return i+2
                }
                if(i === indexId.length){
                    return i+3
                }
            }
        }
    }

    activeMod = () => {
        const {active} = this.state;
        this.setState({active: !active});
    }

    addPers = (person) => {
        const persons = {...this.state.persons}
        persons[`person${this.generateID()}`] = person;
        this.setState({persons: persons})
        toast.success('Сотрудник добавлен')
    }

    editPers = (key, updatePerson) => {
        const persons = {...this.state.persons}
        persons[key] = updatePerson
        this.setState({persons: persons})

    }

    delPers = (key) => {
        const persons = {...this.state.persons}
        delete persons[key]
        this.setState({persons: persons})
    }


    render() {
        return(
            <div className="App">
                <Toaster position="bottom-center" reverseOrder={false}/>
                <TableItem/>

                    {Object.keys(this.state.persons).map(key => {
                        return (<PersItem
                                key={key}
                                index={key}
                                details={this.state.persons[key]}
                                editPers = {this.editPers}
                                delPers = {this.delPers}
                        />);
                    })}

                <Modal
                    active = {this.state.active}
                    import = {<InputPer addPers = {this.addPers} gen = {this.generateID} activeMod = {this.activeMod}/>}
                />
                <button className="add_btn" onClick={this.activeMod}>Добавить сотрудника</button>
            </div>
        );
    }

}

export default App;
