import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { List } from './ContactList.styled';


export class ContactList extends Component {
    static propTypes = {
        deleteItem: PropTypes.func.isRequired,
        filteredContacts: PropTypes.arrayOf(
            PropTypes.exact({
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    };

    render() {
        const { filteredContacts, deleteItem } = this.props;
        return (
            <List>
                {filteredContacts.map(({ name, number, id }) => {
                    return <ContactListItem key={id}
                        name={name}
                        number={number}
                        id={id}
                        deleteItem={deleteItem}
                    />
                }
                )}
            </List>
        );
    };
};

