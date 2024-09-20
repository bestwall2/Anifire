
import Home from './component/Home';
import Navigation from "./component/Navigation.tsx";
import Toolbar from "./component/Toolbar.tsx";

function App() {

  return (
    <>
        <div className="Layout bg-dark-bg h-full">
            <Toolbar />
            <Home />  
            <Navigation />
        </div>

    </>
  )
}

export default App
