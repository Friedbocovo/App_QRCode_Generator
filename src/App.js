import logo from './image/icons8-qr-code-48.png';
import menu from './image/icons8-menu.svg'
import './index.css';
import QRCodeGenerator from "./QRCodeGenerator"
function App() {
  return (
    <div className=" text-center fjustify-center item-center ml-20 mr-20 max-sm:ml-0  max-sm:mr-0">
      <header className="flex justify-between mt-5 mb-5 ">
        <img src={logo} className='w-8 h-8' alt="logo" />
        {/*<img src={menu} className='w-6 h-8' alt="" />*/}
      </header>

      <QRCodeGenerator />
    </div>
  );
}

export default App;
