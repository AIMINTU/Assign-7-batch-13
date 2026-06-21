
import { toast } from 'react-toastify';

const App = () => {
  const notify = () => toast.success("Data loading!");

  return (
    <div className='text-7xl text-center'>
       <button className='btn' onClick={notify}>Clickhere!</button>
      Hello 
    </div>
  );
};

export default App;