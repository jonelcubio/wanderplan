import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TripPlanner from './pages/TripPlanner';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

export default function  App() {
  return (
    <MantineProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trip" element={<TripPlanner />} />
      

    </Routes>
    </MantineProvider>
  );
}