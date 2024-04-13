import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Hero from '../Auth/Hero';

function Form() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-gray-200">
        <Login/>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <Hero/>
      </div>
    </div>
  );
}

export default Form;

