
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import GalleryOne from './components/GalleryOne';
import GalleryTwo from './components/GalleryTwo'
import GalleryThree from './components/GalleryThree'

function App() {
  return (
    <div>
      <NavBar />
      <GalleryOne />
      <GalleryTwo />
      <GalleryThree />
      

    </div>
  );
}

export default App;
