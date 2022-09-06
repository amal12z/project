import './App.css';
import { BrowserRouter ,Switch ,Route , Link} from "react-router-dom";
import CreateTour from './views/CreateTour'
import UpdateTour from './views/UpdateTour'

function App() {
  return (
    <div className="App">
      
  <BrowserRouter>
        <Switch>

          <Route path="/addTour">
            <CreateTour/>
          </Route>

          <Route path="/tour/:id">
            <UpdateTour/>
          </Route>
{/* 
          <Route path="/users">
            <Users/>
          </Route>


          <Route path="/about">
            <About/>
          </Route> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
