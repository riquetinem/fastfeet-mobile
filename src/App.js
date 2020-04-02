import React from 'react';
import { useSelector } from 'react-redux';

import Routes from '~/Routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  return <Routes signed={signed} />;
}
