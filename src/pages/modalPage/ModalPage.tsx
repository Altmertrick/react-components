import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';

const ModalPage: React.FC<any> = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} success>
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>An important agreement to acceptAn important agreement to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste
        rerum nostrum ipsam aliquid molestias vel consequatur, provident
        reprehenderit possimus rem quis delectus eius fugiat nemo sit.
        Doloribus, quas veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste
        rerum nostrum ipsam aliquid molestias vel consequatur, provident
        reprehenderit possimus rem quis delectus eius fugiat nemo sit.
        Doloribus, quas veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste
        rerum nostrum ipsam aliquid molestias vel consequatur, provident
        reprehenderit possimus rem quis delectus eius fugiat nemo sit.
        Doloribus, quas veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste
        rerum nostrum ipsam aliquid molestias vel consequatur, provident
        reprehenderit possimus rem quis delectus eius fugiat nemo sit.
        Doloribus, quas veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste
        rerum nostrum ipsam aliquid molestias vel consequatur, provident
        reprehenderit possimus rem quis delectus eius fugiat nemo sit.
        Doloribus, quas veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste
        rerum nostrum ipsam aliquid molestias vel consequatur, provident
        reprehenderit possimus rem quis delectus eius fugiat nemo sit.
        Doloribus, quas veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste
        rerum nostrum ipsam aliquid molestias vel consequatur, provident
        reprehenderit possimus rem quis delectus eius fugiat nemo sit.
        Doloribus, quas veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste
        rerum nostrum ipsam aliquid molestias vel consequatur, provident
        reprehenderit possimus rem quis delectus eius fugiat nemo sit.
        Doloribus, quas veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste
        rerum nostrum ipsam aliquid molestias vel consequatur, provident
        reprehenderit possimus rem quis delectus eius fugiat nemo sit.
        Doloribus, quas veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste
        rerum nostrum ipsam aliquid molestias vel consequatur, provident
        reprehenderit possimus rem quis delectus eius fugiat nemo sit.
        Doloribus, quas veritatis.
      </p>
    </div>
  );
};

export default ModalPage;
