import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBot } from '../../store/botsSlice';

const BotForm = () => {
  const [botName, setBotName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBot({ botName, phoneNumber, description }));
    setBotName('');
    setPhoneNumber('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bot Name"
        value={botName}
        onChange={(e) => setBotName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Register Bot</button>
    </form>
  );
};

export default BotForm;
