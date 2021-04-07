import Header from './components/Header'
import { useState } from 'react'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import { CSSTransition } from 'react-transition-group'

function App() {


  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
      <div className="container">
        <Header onAdd={() => setShowPortfolio(!showPortfolio)} showText={showPortfolio}/>
        
        <CSSTransition
        in={!showPortfolio}
        timeout={200}
        classNames="sectionAnimation"
        unmountOnExit
        onEnter={() => showPortfolio}
        onExited={() => showPortfolio}>
          <About className='sectionAnimation'/>
      </CSSTransition>

        <CSSTransition
        in={showPortfolio}
        timeout={200}
        classNames="sectionAnimation"
        unmountOnExit
        onEnter={() => showPortfolio}
        onExited={() => showPortfolio}>
          <Portfolio className='sectionAnimation'/>
      </CSSTransition>


      <Footer/>
    </div>
    
  );
}

export default App;
