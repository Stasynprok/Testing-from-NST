import React from 'react';
import './styles/app.css';
import toast, { Toaster } from 'react-hot-toast';
import Modal from './components/UI/modal/modal.js';
import TableItem from './components/table_item.js';
import PersonItem from './components/person_item.js';
import InputPerson from './components/UI/input/input_person.js';

class App extends React.Component {
  state = {
    persons: {},
    active: false,
  };

  saveData = (person) => {
    const src = 'http://localhost:3001/';
    const api = 'api/v1/persons';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person),
    };
    fetch(`${src}${api}`, requestOptions).then((response) => response.json());
  };

  delData = (person) => {
    const src = 'http://localhost:3001/';
    const api = `api/v1/person/${person}`;
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`${src}${api}`, requestOptions).then((response) => response.json());
  };

  editData = (personid, fname, lname) => {
    const src = 'http://localhost:3001/';
    const api = `api/v1/person/${personid}`;
    const data = {
      id: personid,
      firstN: fname,
      lastN: lname,
    };
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    fetch(`${src}${api}`, requestOptions).then((response) => response.json());
  };

  componentDidMount() {
    const src = 'http://localhost:3001/';
    const api = 'api/v1/persons';
    fetch(`${src}${api}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ persons: result });
      });
  }

  generateID = () => {
    const indexId = [];
    Object.keys(this.state.persons).map((key) => {
      return indexId.push(this.state.persons[key].id);
    });
    indexId.sort((a, b) => a - b);

    if (Object.keys(this.state.persons).length === 0) {
      return 1;
    } else {
      if (!indexId.includes(1)) {
        return 1;
      }
      for (let i = 0; i < indexId.length; i++) {
        if (indexId[i] !== indexId[i + 1] - 1) {
          return i + 2;
        }
        if (i === indexId.length) {
          return i + 3;
        }
      }
    }
  };

  activeMod = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  addPerson = (person) => {
    const persons = { ...this.state.persons };
    persons[`person${this.generateID()}`] = person;
    this.saveData(persons[`person${this.generateID()}`]);
    this.setState({ persons: persons });

    toast.success('Сотрудник добавлен');
  };

  editPerson = (key, updatePerson) => {
    const persons = { ...this.state.persons };
    persons[key] = updatePerson;
    this.setState({ persons: persons });
    this.editData(persons[key].id, persons[key].firstN, persons[key].lastN);
  };

  delPerson = (key) => {
    const persons = { ...this.state.persons };
    this.delData(persons[key].id);
    delete persons[key];
    this.setState({ persons: persons });
  };

  render() {
    return (
      <div className="App">
        <Toaster position="bottom-center" reverseOrder={false} />
        <TableItem />
        {Object.keys(this.state.persons).map((key) => {
          return (
            <PersonItem
              key={key}
              index={key}
              details={this.state.persons[key]}
              editPerson={this.editPerson}
              delPerson={this.delPerson}
            />
          );
        })}

        <Modal
          active={this.state.active}
          import={
            <InputPerson
              addPerson={this.addPerson}
              gen={this.generateID}
              activeMod={this.activeMod}
            />
          }
        />
        <button className="add_btn" onClick={this.activeMod}>
          Добавить сотрудника
        </button>
      </div>
    );
  }
}

export default App;
