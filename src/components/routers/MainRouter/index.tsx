import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from '../../../Pages/Home';
import { About } from '../../../Pages/Home/About';
import { NotFaund } from '../../../Pages/Home/NotFound';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre-pomodoro/' element={<About />} />

        <Route path='*' element={<NotFaund />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
