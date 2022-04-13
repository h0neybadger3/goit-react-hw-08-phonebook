import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Title } from './ContactsView.styled';

export default function ContactsView() {
  return (
    <>
      <Title>Contacts</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
