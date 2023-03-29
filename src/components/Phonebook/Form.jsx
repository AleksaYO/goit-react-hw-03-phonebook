import css from './Phonebook.module.css';
import React from 'react';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.UpdateContacs(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.onSubmit}>
        <label className={css.label} htmlFor="">
          Name
          <input
            className={css.input}
            onInput={this.onChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label} htmlFor="">
          Number
          <input
            onInput={this.onChange}
            className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
