import React from 'react';
import './del_person.css';
import PropTypes from 'prop-types';

class DelPerson extends React.Component {
  state = {
    target: true,
  };

  static propTypes = {
    index: PropTypes.string,
    person: PropTypes.object,
    delPerson: PropTypes.func,
    activeMod: PropTypes.func,
    toast: PropTypes.func,
  };

  deletePerson = (e) => {
    e.preventDefault();
    if (this.state.target === true) {
      this.props.delPerson(this.props.index);
    }
  };

  backB = () => {
    this.setState({ target: false });
  };

  delB = () => {
    this.setState({ target: true });
  };

  render() {
    return (
      <form onSubmit={this.deletePerson}>
        <h1>Удаление сотрудника</h1>
        <div className="name_block">
          <p className="f_name_p">
            <strong>Имя:</strong> {this.props.person.firstN}
          </p>
          <p className="l_name_p">
            <strong>Фамилия:</strong> {this.props.person.lastN}
          </p>
        </div>
        <div className="btn_block">
          <button
            className="delete_btn"
            onClick={() => {
              this.delB();
              this.props.activeMod();
              this.props.toast();
            }}
          >
            Удалить
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
      </form>
    );
  }
}

export default DelPerson;
