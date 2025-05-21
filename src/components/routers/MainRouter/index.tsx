import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { About } from '../../../Pages/About';
import { NotFaund } from '../../../Pages/NotFound';
import { Home } from '../../../Pages/Home';
import { useEffect } from 'react';
import { History } from '../../../Pages/History';
import { Settings } from '../../../Pages/Settings';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history/' element={<History />} />
        <Route path='/settings/' element={<Settings />} />
        <Route path='/about-pomodoro/' element={<About />} />
        <Route path='*' element={<NotFaund />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
