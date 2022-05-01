import React from 'react';
import './edit_person.css';
import PropTypes from 'prop-types';

class EditPerson extends React.Component {
  state = {
    target: true,
  };

  static propTypes = {
    index: PropTypes.string,
    person: PropTypes.object,
    editPerson: PropTypes.func,
    activeMod: PropTypes.func,
    toast: PropTypes.func,
  };

  editPerson = (e) => {
    e.preventDefault();
    if (this.state.target === false || !/\d/.test(e.currentTarget.value)) {
      const updatePerson = {
        ...this.props.person,
        [e.currentTarget.name]: e.currentTarget.value,
      };

      this.props.editPerson(this.props.index, updatePerson);
    }
  };

  backB = () => {
    this.setState({ target: false });
  };

  saveB = () => {
    this.setState({ target: true });
  };

  render() {
    return (
      <div>
        <h1>Редактирование сотрудника</h1>
        <p>
          <input
            className="input_f"
            onChange={this.editPerson}
            name="firstN"
            type="text"
            placeholder="Имя"
            value={this.props.person.firstN}
          />
        </p>
        <p>
          <input
            className="input_l"
            onChange={this.editPerson}
            name="lastN"
            type="text"
            placeholder="Фамилия"
            value={this.props.person.lastN}
          />
        </p>

        <div className="btn_block">
          <button
            className="save_btn"
            onClick={() => {
              this.saveB();
              this.props.activeMod();
              this.props.toast();
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
      </div>
    );
  }
}

export default EditPerson;
