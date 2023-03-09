import styled from "@emotion/styled";

export const Item = styled.li`
font-size:30px;
font-weight:500;
display:flex;
align-items: baseline;
justify-content:space-between;
margin-top:20px;
`;

export const Button = styled.button`
display:inline-block;
align-items:center;
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