import "./App.scss";
import { Route, HashRouter, Switch } from "react-router-dom";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import Header from "./components/Header";
import Home from "./components/Home";
import ItemList from "./components/ItemList";
import Detail from "./components/Detail";
import InformationPage from "./components/InformationPage";
import Preloader from "./components/Preloader";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay]);

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Preloader />
        <section className="Content">
          <div className="Content__wrapper">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/list" exact component={ItemList} />
              <Route path="/detail" exact component={Detail} />
              <Route
                component={() => (
                  <InformationPage message="La ruta a la que está tratando de acceder no existe" />
                )}
              />
            </Switch>
          </div>
        </section>
      </div>
    </HashRouter>
  );
}

export default App;
