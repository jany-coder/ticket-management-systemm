import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import TicketsType from './components/TicketsType/TicketsType';
import Profile from './components/Profile/Profile';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <TicketsType></TicketsType>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
