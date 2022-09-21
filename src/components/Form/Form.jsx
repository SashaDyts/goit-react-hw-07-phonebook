import React from 'react';
import { FormStyled, Label, Input, Button } from './Form.styled';
import useForm from 'hooks/useForm';

function Form() {
  const { name, number, setName, setNumber, submitOnForm } = useForm();

  return (
    <FormStyled onSubmit={submitOnForm}>
      <Label>
        Name
        <Input
          onChange={e => {
            setName(e.currentTarget.value);
          }}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
        />
      </Label>
      <Label>
        Phone
        <Input
          onChange={e => {
            setNumber(e.currentTarget.value);
          }}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
}

export default Form;
