import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';

const useForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function submitOnForm(e) {
    e.preventDefault();

    onAddContact({ name, number });

    setName('');
    setNumber('');
  }
  const dispatch = useDispatch();

  const onAddContact = payload => {
    dispatch(addContact(payload));
  };

  return { name, number, setName, setNumber, submitOnForm };
};

export default useForm;
