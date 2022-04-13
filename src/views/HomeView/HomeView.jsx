import { ReactComponent as ContactIcon } from 'icons/contact.svg';
import { Title, Text, TryLink } from './HomeView.styled';

export default function HomeView() {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactIcon alt="phonebook" />
      <Text>Save your contacts in our App</Text>
      <TryLink to="/login">Try it now!</TryLink>
    </>
  );
}
