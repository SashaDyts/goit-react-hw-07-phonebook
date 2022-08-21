import React, { Component } from 'react';
import { FormStyled, Label, Input, Button } from './Form.styled';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    number: '',
    id: nanoid(),
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  submitOnForm = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', id: nanoid() });
  };

  render() {
    return (
      <FormStyled onSubmit={this.submitOnForm}>
        <Label>
          Name
          <Input
            onChange={this.handleChange}
            value={this.state.name}
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
            onChange={this.handleChange}
            value={this.state.number}
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
}

export default Form;
