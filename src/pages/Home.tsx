
import HomeComp from '../component/Home.tsx';
import Navigation from "../component/Navigation.tsx";
import Toolbar from "../component/Toolbar.tsx";

const Home = () => {
  return (
    <>
      <div className="Layout bg-dark-bg h-full">
        <Toolbar />
        <HomeComp />
        <Navigation />
      </div>
    </>
  )
}

export default Home