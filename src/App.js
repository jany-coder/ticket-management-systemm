import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import TicketsType from './components/TicketsType/TicketsType';


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
