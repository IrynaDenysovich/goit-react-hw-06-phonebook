import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';

export function App() {

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>

      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
      <Toaster />
    </div>
  );
}
