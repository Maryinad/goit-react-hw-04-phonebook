import { Contact, Btn } from './ContactItem.styled';
import PropTypes from 'prop-types';

export function ContactItem({ name, number, id, onDeleteBtn }) {
  return (
    <Contact>
      <span>{name}</span>
      <span> {number}</span>
      <Btn onClick={() => onDeleteBtn(id)}>Delete</Btn>
    </Contact>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};
