import React from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

class EditPerson extends React.Component {
  state = {
    target: false,
    firstName: this.props.person.firstN,
    lastName: this.props.person.lastN,
  };

  static propTypes = {
    index: PropTypes.string,
    person: PropTypes.object,
    editPerson: PropTypes.func,
    activeMod: PropTypes.func,
  };

  handleInputChanges = this.handleInputChange.bind(this);

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  editPerson = (e) => {
    e.preventDefault();
    if (this.state.target) {
      const person = {
        id: this.props.person.id,
        firstN: this.state.firstName,
        lastN: this.state.lastName,
      };
      this.props.editPerson(this.props.index, person);
      e.currentTarget.reset();
    } else if (!this.state.target) {
      e.currentTarget.reset();
    }
  };

  backB = () => {
    this.setState({
      target: false,
      firstName: this.props.person.firstN,
      lastName: this.props.person.lastN,
    });
  };

  saveB = () => {
    if (
      !/\d/.test(this.state.firstName) &&
      !/\d/.test(this.state.lastName) &&
      this.state.lastName !== '' &&
      this.state.firstName !== ''
    ) {
      this.setState({ target: true });
      this.props.activeMod();
      toast.success('Изменения сохранены');
    } else {
      this.setState({ target: false });
      if (this.state.lastName === '' || this.state.firstName === '') {
        toast.error('Заполните все поля!!!', {
          style: {
            background: '#B22222',
            color: 'white',
          },
        });
      } else {
        toast.error('Имя и фамилия не должны содержать числа!', {
          style: {
            background: '#B22222',
            color: 'white',
          },
        });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.editPerson}>
        <h1>Редактирование сотрудника</h1>
        <p>
          <input
            className="input_f"
            name="firstName"
            type="text"
            placeholder="Имя"
            value={this.state.firstName}
            onChange={this.handleInputChanges}
          />
        </p>
        <p>
          <input
            className="input_l"
            name="lastName"
            type="text"
            placeholder="Фамилия"
            value={this.state.lastName}
            onChange={this.handleInputChanges}
          />
        </p>
        <div className="btn_block">
          <button
            className="save_btn"
            onClick={() => {
              this.saveB();
            }}
          >
            Сохранить
          </button>
          <button
            className="back_btn"
            onClick={() => {
              this.backB();
              this.props.activeMod();
            }}
          >
            Назад к таблице
          </button>
        </div>

        <Toaster position="bottom-center" reverseOrder={false} />
      </form>
    );
  }
}

export default EditPerson;
