import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormTitle, StyledForm, InputBox, InputLabel, StyledField, SubmitBtn, Error } from './ContactsForm.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Invalid name format.'
        )
      .min(3, 'Too short contact name!')
      .max(50, 'Too long contact name!')
      .required('Required'),
   number: Yup.string()
      .trim()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Invalid phone number format'
      )
     .required('Required'),
 });

export const ContactsForm = ({ onSubmitForm }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={onSubmitForm}
    >
      <StyledForm>
        <FormTitle>Add contact</FormTitle>
        <InputBox>
          <StyledField name="name" autoComplete="off" required />
          <InputLabel>Name</InputLabel>
          <Error component='p' name="name" />
        </InputBox>
        <InputBox>
          <StyledField type="tel" autoComplete="off" name="number" required />
          <InputLabel>Phone</InputLabel>
          <Error component='p' name="number" />
        </InputBox>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </StyledForm>
    </Formik>
  )
}
