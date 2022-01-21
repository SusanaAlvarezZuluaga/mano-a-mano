import { FiTruck } from 'react-icons/fi';
import { MdStorefront } from 'react-icons/md';

import './styles.css';

function RecieveOptionForm({ setRecieveOrderOption }) {
  return (
    <div className="options-holder">
      <button
        className="order-option"
        onClick={() => setRecieveOrderOption('delivery')}
      >
        <FiTruck />
        <div className="order-option-name"> Delivery</div>
      </button>

      <button
        className="order-option"
        onClick={() => setRecieveOrderOption('clickAndCollect')}
      >
        <MdStorefront />
        <div className="order-option-name"> Click & Collect</div>
      </button>
    </div>
  );
}

export default RecieveOptionForm;
