import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './input_person.css';
import PropTypes from 'prop-types';

class InputPerson extends React.Component {
  state = {
    target: false,
    targetBack: false,
  };

  static propTypes = {
    addPerson: PropTypes.func,
    gen: PropTypes.func,
    activeMod: PropTypes.func,
  };

  firstNRef = React.createRef();
  lastNRef = React.createRef();

  addPerson = (e) => {
    e.preventDefault();
    if (this.state.target === true) {
      const person = {
        id: this.props.gen(),
        firstN: this.firstNRef.current.value,
        lastN: this.lastNRef.current.value,
      };
      this.props.addPerson(person);
      e.currentTarget.reset();
    } else if (this.state.targetBack === true) {
      e.currentTarget.reset();
      this.setState({ targetBack: false });
    }
  };

  backB = () => {
    this.setState({ target: false });
    this.setState({ targetBack: true });
  };

  saveB = () => {
    if (
      !/\d/.test(this.firstNRef.current.value) &&
      !/\d/.test(this.lastNRef.current.value) &&
      this.lastNRef.current.value !== '' &&
      this.firstNRef.current.value !== ''
    ) {
      this.setState({ target: true });
      this.props.activeMod();
    } else {
      this.setState({ target: false });
      if (
        this.lastNRef.current.value === '' ||
        this.firstNRef.current.value === ''
      ) {
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
      <form onSubmit={this.addPerson}>
        <h1>Добавление сотрудника</h1>
        <p>
          <input
            className="input_f"
            ref={this.firstNRef}
            name="first"
            type="text"
            placeholder="Имя"
          />
        </p>
        <p>
          <input
            className="input_l"
            ref={this.lastNRef}
            name="last"
            type="text"
            placeholder="Фамилия"
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

export default InputPerson;
