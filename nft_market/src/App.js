import './App.css';
import Market from './Components/Market';
import WorkingSteps from './Components/WorkingSteps';
import Notable from './Components/Notable';
import Logos from './Components/Logos';
import Categories from './Components/Categories';
import ExploreCategories from './Components/ExploreCategories';
import FAQ from './Components/FAQ';
import GettingStarted from './Components/GettingStarted';
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
  </div>
);
}

export default App;
