// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {animalData} from './data';

function App() {
  // set modalOpen to false
  // const [modalOpen, setModalOpen] = useState(false);
  //switches this to the opposite
  // let toggleModal = () => {
  //   setModalOpen(prevModalOpen => !prevModalOpen) 
  // };

  return (
    <div className="App">
      <Header/>
      {/* passing into main so main can use them.  */}
      <Main 
        animalData={animalData}/>
      <Footer/>
    </div>
  );
}

export default App;
