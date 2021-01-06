import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.component";
import Navbar from "./components/Navbar/Navbar.component";
import Orders from "./components/Orders/Orders.component";

function Routes(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>            
        </BrowserRouter>
    );
}

export default Routes;