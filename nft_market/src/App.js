import './App.css';
import Market from './Components/Market';
import WorkingSteps from './Components/WorkingSteps';
import Notable from './Components/Notable';
import Logos from './Components/Logos';
import Categories from './Components/Categories';
import ExploreCategories from './Components/ExploreCategories';
import FAQ from './Components/FAQ';
import GettingStarted from './Components/GettingStarted';
import BottomNav from './Components/BottomNav';

function App() {
return(
  <div>
    <Market/>
    <WorkingSteps/>
    <Notable/>
    <Logos/>
    <Categories/>
    <ExploreCategories/>
    <FAQ/>
    <GettingStarted/>
    <BottomNav/>
  </div>
);
}

export default App;
