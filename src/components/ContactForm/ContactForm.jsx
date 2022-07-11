import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Form, Wrapper, Input, SubmitButton } from './ContactForm.styled';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const phonebook = useSelector(phonebookSelectors.getContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedFilter = name.toLowerCase();

    const checkForDuplicateName = phonebook.find(
      contact => contact.name.toLowerCase() === normalizedFilter
    );

    if (!checkForDuplicateName) {
      const contact = { name, number };

      dispatch(phonebookOperations.postContacts(contact));

      setName('');
      setNumber('');
      return;
    }

    toast.error(`${name} is already in contacts`, {
      position: 'top-right',
      theme: 'colored',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Contact name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Wrapper>
        <Wrapper>
          Phonebook
          <Input
            type="tel"
            name="phone"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </Wrapper>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </>
  );
}
