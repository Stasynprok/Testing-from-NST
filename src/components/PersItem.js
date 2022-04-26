import React from 'react';
import persImag from "../image/person-icon.png";
import EditPes from "./UI/edit/EditPes";
import Modal from "./UI/modal/Modal.js";
import DelPerson from "./UI/edit/DelPerson";
import toast, {Toaster} from "react-hot-toast";

class PersItem extends React.Component{
    state = {
        activeE: false,
        activeD: false
    }

    activeModE = () =>{
        const active = this.state.activeE;
        this.setState({activeE: !active});
    }

    activeModD = () =>{
        const active = this.state.activeD;
        this.setState({activeD: !active});
    }

    toastEdit = () => {
        toast.success('Изменения сохранены')
    }

    toastDell = () => {
        toast.success('Сотрудник удален')
    }



    render() {
        return(
                <div className='person'>
                    <div className='image_pers'>
                        <img src={persImag} alt='' width={20} height={20}/>
                    </div>

                    <div>
                        <p>{this.props.details.firstN}</p>
                    </div>
                    <div>
                        <p>{this.props.details.lastN}</p>
                    </div>
                    <div>
                        <button className='edit_btn' onClick={this.activeModE} />

                        <button className='del_btn' onClick={this.activeModD}/>
                    </div>


                    <Modal
                        active = {this.state.activeE}
                        import = {<EditPes activeMod = {this.activeModE}
                                           pers = {this.props.details}
                                           editPers = {this.props.editPers}
                                           index = {this.props.index}
                                           toast = {this.toastEdit}
                        />}

                    />

                    <Modal
                        active = {this.state.activeD}
                        import = {<DelPerson activeMod = {this.activeModD}
                                             pers = {this.props.details}
                                             index = {this.props.index}
                                             delPers = {this.props.delPers}
                                             toast = {this.toastDell}
                        />}
                    />
                    <Toaster position="bottom-center" reverseOrder={false}/>
                </div>
        );
    }

}

export default PersItem;