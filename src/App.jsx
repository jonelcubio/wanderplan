import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function  App() {
  return (
    <MantineProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      

    </Routes>
    </MantineProvider>
  );
}