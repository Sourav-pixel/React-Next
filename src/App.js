
import './App.css';
import Navbars from './Navbar.js';
import Home from './Sections.js';
import Second from './AllinOne.js'
import NewsContext  from './components/NewsContext.js'
function App() {
  return (
<div className="main">
<Navbars/>
<Home/>
<Second />
<NewsContext/>
</div>



 

  );
}

export default App;
