import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './HistoryCard.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'lightblue',
    textAlign: 'center',
    width: '20%'
  }
};
class HistoryCard extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement(document.getElementById('app'));
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen } = this.state;
    const { routeName, routeDate, isActive, rating, feedback } = this.props;
    return (
      <div className={`historyCard ${isActive ? 'is-active' : ''}`}>
        <p className="historyCard__p">
          {routeName} &nbsp;
          <span className="historyCard__p--date">{routeDate}</span>
          {isActive && <span className="historyCard__p--is-active">Active</span>}
        </p>
        <button type="submit" onClick={this.openModal} className="historyCard__btn">VIEW</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={200}
          ariaHideApp={false}
          contentLabel="Trip details"
          style={customStyles}
        >
          <h4>Trip details</h4>
          <p>Route name:  {routeName}</p>
          <p>Route date:  {routeDate}</p>
          <p>Rating :  {rating}</p>
          <p>Feedback :  {feedback}</p>
          <button type="submit" onClick={this.closeModal} className="historyCard__btn trip_details">close!</button>
        </Modal>
      </div>
    );
  }
}


HistoryCard.defaultProps = {
  isActive: false
};

HistoryCard.propTypes = {
  routeName: PropTypes.string.isRequired,
  routeDate: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  rating: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired
};

export default HistoryCard;
