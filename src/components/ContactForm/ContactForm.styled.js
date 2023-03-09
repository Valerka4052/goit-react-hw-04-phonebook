import styled from "@emotion/styled";
import { Form as FormikForm, Formik as FormikFormik, Field as FormikField, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
display:flex;
flex-direction: column;
padding:40px;
width: 800px;
height:auto;
border-radius: 40px;
background-color:lightgreen;
`;

export const Formik = styled(FormikFormik)`
margin-bottom:40px;
`;

export const Field = styled(FormikField)`
width:80%;
padding:15px 25px;
font-size:30px;
font-weight:500;
margin-top:20px;
border-radius: 15px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
color:red;
font-size:15px;
font-weight:500;
`;

export const Label = styled.label`
display:flex;
flex-direction: column;
align-items:center;
margin-bottom:20px;
`;

export const Button = styled.button`
display:inline-block;
align-items:center;
margin-left:auto;
margin-right:auto;
margin-top:30px;
width:50%;
font-size:30px;
font-weight:500;
padding:15px 25px;
border-radius: 15px;
background-color:sandybrown;
cursor:pointer;
&:hover{
    background-color:saddlebrown;
    color:whitesmoke;
}
`;