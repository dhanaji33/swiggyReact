import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import appStore from "./store/AppStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Collection from "./components/Collection";
import ResturentNearMe from "./components/ResturentNearMe";
import FoodRestaurantSearch from "./components/FoodRestaurantSearch";
// const appRouter = createBrowserRouter([
//   {
//  path : '/',
//  element : <Body/>
//  },
//  {
//   path : 'rest/:id',
//   element : <Restaurant/>
//   },
//  {
//   path : '/cart',
//   element : <Cart/>
//   }
// ])

function App() {
  return (
    <div className="mx-auto">
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/rest/:id" element={<Restaurant />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/nearme" element={<ResturentNearMe />} />
            <Route path="/search" element={<Search />} />
            <Route path="/collections/:id" element={<Collection />} />
            <Route
              path="/FoodRestaurentSearch"
              element={<FoodRestaurantSearch />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* <Provider store = {appStore} >
        <BrowserRouter>
        <Header/>
        < RouterProvider router={appRouter} />
        </BrowserRouter>
      </Provider> */}
    </div>
  );
}

export default App;
