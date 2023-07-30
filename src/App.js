
import './App.css';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/Contactform/ContactForm';
import Navigation from './components/Navigation/Navigation';
function App() {
  return <div className="container1">
     <Navigation/>
     
    <main className="main_container">
    <ContactHeader/>
    <ContactForm/>
    </main>
  </div>;
}

export default App;
