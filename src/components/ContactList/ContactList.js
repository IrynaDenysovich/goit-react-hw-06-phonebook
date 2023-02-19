import { ContainertList, ListContact, BtnDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onClickHandle = id => {
    dispatch(deleteContact(id));
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    (contact.name + contact.number).toLowerCase().includes(normalizedFilter)
  )
  return (
    <ContainertList>
      {visibleContacts.map(({ number, name, id }) => {
        return (
          <ListContact key={id}>
            {name}: {number}
            <BtnDelete
              onClick={() => {
                onClickHandle(id);
              }}
            >
              Delete
            </BtnDelete>
          </ListContact>
        );
      })}
    </ContainertList>
  );
}
