import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';

export function ContactListItem({ name, number, id, deleteItem}) {
    return (
        <Item >{name}: {number}<Button onClick={() => { deleteItem(id) }} type='button'>Delete</Button></Item>
    );
};

ContactListItem.propTypes = {
    deleteItem: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

