/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Form, IField, IFieldsStack, FieldType, Heading, SubHeading } from 'components';
import { Link as RouterLink } from 'react-router-dom';
import { ITextFieldProps, Link, Stack } from 'office-ui-fabric-react';
import Locale from 'localization';
import { Colors } from 'utils';

const NameField: IField<ITextFieldProps> = {
  itemKey: 'name',
  type: FieldType.textField,
  props: {
    label: Locale.landing.signup.name,
    required: true,
  },
};

const EmailField: IField<ITextFieldProps> = {
  itemKey: 'email',
  type: FieldType.textField,
  props: {
    label: Locale.landing.signup.email,
    required: true,
  },
};

const PasswordField: IField<ITextFieldProps> = {
  itemKey: 'password',
  type: FieldType.textField,
  props: {
    label: Locale.landing.signup.password,
    type: 'password',
    required: true,
  },
};

const UsernameField: IField<ITextFieldProps> = {
  itemKey: 'username',
  type: FieldType.textField,
  props: {
    label: Locale.landing.signup.username,
    required: true,
  },
};

const PhoneNumberField: IField<ITextFieldProps> = {
  itemKey: 'phoneNumber',
  type: FieldType.textField,
  props: {
    label: Locale.landing.signup.phoneNumber,
    required: true,
  },
};

function SignupForm() {
  const fields: IFieldsStack[] = [
    {
      fields: [NameField, EmailField, PasswordField, UsernameField, PhoneNumberField],
    },
  ];

  return (
    <>
      <Heading>{Locale.landing.signup.heading}</Heading>
      <SubHeading mb={4} style={{ fontWeight: 500 }} color={Colors.neutralSecondary}>
        {Locale.landing.signup.help}
      </SubHeading>
      <Form id="signup" name="signup" buttonText={Locale.landing.signup.cta} fieldsStacks={fields} />
      <Stack padding={20} horizontalAlign="center">
        <Link>
          <RouterLink to="/login">{Locale.landing.signup.goToLogin}</RouterLink>
        </Link>
      </Stack>
    </>
  );
}

export default SignupForm;