import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import {Route, Link, BrowserRouter as Router, Routes} from "react-router-dom";
import {} from "react-router";
import About from "./components/about";
import Gallery from "./components/gallery";

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand navbar bg-light m-2">
                <ul className="navbar-nav">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/gallery">Gallery</Link>
                    </li>
                </ul>

            </nav>
            <div className="container">
                {/*<Switch>*/}

                {/*    <Route path="/" component={About } ></Route>*/}
                {/*    <Route path="/about" component={About} ></Route>*/}
                {/*    <Route path="/product" component={About} ></Route>*/}

                {/*</Switch>*/}

                    <Routes>
                        <Route path="/" element={
                            <div>
                                <h1>Home</h1>
                            </div>
                        } />
                        <Route path="/counter" element={<Counter title="Counter" image="https://picsum.photos/200/200"/>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>


            </div>
        </Router>
    );
}

export default App;
