import React from 'react';
import { PhonebookList } from './PhonebookList';
import { Form } from './Form';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

export class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFilter = value => {
    this.setState(() => ({
      filter: value,
    }));
  };

  onDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(item => item.id !== id),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      this.setState({ contacts: JSON.parse(localContacts) });
    }
  }

  UpdateContacs = data => {
    data.id = nanoid();

    if (this.state.contacts.some(item => item.number === data.number)) {
      Notify.failure('Контакт с таким номером уже существует');
      return;
    }

    this.setState(prev => ({
      contacts: [data, ...prev.contacts],
    }));
  };

  render() {
    return (
      <>
        <Form
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          UpdateContacs={this.UpdateContacs}
        />
        {this.state.contacts.length > 0 && (
          <Filter state={this.state} onFilter={this.onFilter} />
        )}
        <PhonebookList state={this.state} onDelete={this.onDelete} />
      </>
    );
  }
}
