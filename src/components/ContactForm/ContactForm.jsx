import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage, Label, Button } from './ContactForm.styled';
 
export class ContactForm extends Component{

    static propTypes = {
        getStateValues: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(
            PropTypes.exact({
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    };

    getValues = (inputValues) => {
        if (inputValues.name === '' || inputValues.number === '') {
            return;
        } else if (this.props.contacts.find((contact) => {
            return contact.name === inputValues.name;
        })) {
            return alert(`${inputValues.name} is already in contacts`);
        } else {
            const contact = {
                name: inputValues.name,
                number: inputValues.number,
                id: nanoid(),
            };
            this.props.getStateValues(contact);
            inputValues.name = '';
            inputValues.number = '';
            };
    };

    render() {

        const values = {
            name: '',
            number: '',
        };
        
        const phoneSchema = Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(5)
            .required('A phone number is required');
        
        const validationSchema = Yup.object({
            name: Yup.string().required(),
            number: phoneSchema,
        });

        const submitForm = (values) => {
            this.getValues(values);
        };
        

        return (
            <Formik
                initialValues={values}
                onSubmit={submitForm}
                validationSchema={validationSchema}
            >
                <Form>
                    <Label>Name<Field name="name" /><ErrorMessage name="name" component="p" /></Label>
                    <Label>Number<Field name="number" /><ErrorMessage name="number" type="number" component="p" /></Label>
                    <Button type="submit">add contact</Button>
                </Form>
            </Formik>
        );
    };
};
