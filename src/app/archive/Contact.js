import { Container } from '@material-ui/core';

import React from 'react';

import { ContactForm, Layout } from '../../../components';

export default function Contact() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <ContactForm />
      </Container>{' '}
    </Layout>
  );
}
