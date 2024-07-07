import React from 'react';
import './styles.scss';
import { Routing } from '@/pages';
import { withProviders } from '@/app/providers';

function App() {
  return (
    <Routing />
  );
}
export default withProviders(App);
