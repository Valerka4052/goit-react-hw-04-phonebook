import PropTypes from 'prop-types';
import { Container, Label, Input } from './Filter.styled';

export function Filter ({setFilter}){
    return (
        <Container>
            <Label >Find contacts by name<Input onChange={(e) => setFilter(e.target.value)} name="filter" type="text" /></Label>
        </Container>
    );
};

Filter.propTypes = {
    getFilter: PropTypes.func.isRequired,
};
