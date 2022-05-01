import React from 'react';
import './modal.css';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    import: PropTypes.object,
  };

  render() {
    return (
      <div>
        <div className={this.props.active ? 'modal active' : 'modal'}>
          <div className="modal_content">{this.props.import}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
