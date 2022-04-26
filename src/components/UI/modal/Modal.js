import React from 'react';
import "./Modal.css"


class Modal extends React.Component{

    render() {
        return(
            <div>
                <div className={this.props.active ? "modal active" : "modal" }>
                    <div className="modal_content">
                        {this.props.import}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;