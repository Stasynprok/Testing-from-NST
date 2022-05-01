import React from 'react';
import PERSON_IMAGE from '../image/person-icon.png';
import EditPerson from './UI/edit/edit_person.js';
import Modal from './UI/modal/modal.js';
import DelPerson from './UI/edit/del_person.js';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

class PersonItem extends React.Component {
  state = {
    activeE: false,
    activeD: false,
  };

  static propTypes = {
    index: PropTypes.string,
    details: PropTypes.object,
    editPerson: PropTypes.func,
    delPerson: PropTypes.func,
  };

  activeModE = () => {
    const active = this.state.activeE;
    this.setState({ activeE: !active });
  };

  activeModD = () => {
    const active = this.state.activeD;
    this.setState({ activeD: !active });
  };

  toastEdit = () => {
    toast.success('Изменения сохранены');
  };

  toastDell = () => {
    toast.success('Сотрудник удален');
  };

  render() {
    return (
      <div className="person">
        <div className="image_pers">
          <img src={PERSON_IMAGE} alt="" width={20} height={20} />
        </div>

        <div>
          <p>{this.props.details.firstN}</p>
        </div>
        <div>
          <p>{this.props.details.lastN}</p>
        </div>
        <div>
          <button className="edit_btn" onClick={this.activeModE} />

          <button className="del_btn" onClick={this.activeModD} />
        </div>

        <Modal
          active={this.state.activeE}
          import={
            <EditPerson
              activeMod={this.activeModE}
              person={this.props.details}
              editPerson={this.props.editPerson}
              index={this.props.index}
              toast={this.toastEdit}
            />
          }
        />

        <Modal
          active={this.state.activeD}
          import={
            <DelPerson
              activeMod={this.activeModD}
              person={this.props.details}
              index={this.props.index}
              delPerson={this.props.delPerson}
              toast={this.toastDell}
            />
          }
        />
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    );
  }
}

export default PersonItem;
