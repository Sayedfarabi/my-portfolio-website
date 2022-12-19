import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Routes';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/AuthProvider/AuthProvider';
import Loading from './Component/Utilities/Loading/Loading';
import { useContext } from 'react';



function App() {
  const { loading } = useContext(AuthContext);



  if (loading) {
    return <Loading></Loading>
  }


  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={routes}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
