import Modal from 'react-modal';
import './plan.modal.scss';
import img_item from '../assets/img/logo.png';

const PlanModal = (props: any) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.toggleIsOpen}
      contentLabel="Think Plan dialog"
      className="planmodal"
      overlayClassName="modaloverlay"
      closeTimeoutMS={500}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <p className="modal-caption">Things in Plan</p>
      <ul className="plan-list">
        <li className="list-item">
          <span className="txt-item">Weekly custom made animations/3D renders of your uglies for 2 holders</span>
          <img className="img-item" alt="Item image" src={img_item} />
        </li>
        <li className="list-item">
          <span className="txt-item">Listed on rarity tools, rarity sniper etc.</span>
          <img className="img-item" alt="Item image" src={img_item} />
        </li>
        <li className="list-item">
          <span className="txt-item">Development of „231 cuties“ collection aidropped to holders</span>
          <img className="img-item" alt="Item image" src={img_item} />
        </li>
      </ul>

      <div className="div-close">
        <span className="txt-close" onClick={() => props.toggleIsOpen()}>Close</span>
      </div>
    </Modal>
  );
};

export default PlanModal;