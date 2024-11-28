import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import About from '../components/About';
import Timeline from '../components/Timeline';
import PortfolioDetails from '../components/PortfolioDetails';
import Contact from '../Pages/Contact';
import RecentWorks from '../components/RecentWorks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'portfolio',
        element: <RecentWorks></RecentWorks>,
      },
      {
        path: 'portfolio/:id',
        element: <PortfolioDetails />,
        loader: () => fetch('../projects.json'),
      },
      {
        path: 'timeline',
        element: <Timeline></Timeline>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'blog',
        element: <About></About>,
      },
    ],
  },
]);
export default router;
