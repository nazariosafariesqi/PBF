import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  Navigate,
  Outlet
} from "react-router-dom";
import gambar_lightning from "./images/lightning.png";

function Main() {
  return (
    <ProvideAuth>
      <Router>
        <div className="body">
          <AuthButton />
            <header className="header">
              <nav className="navbar">
                <ul className="nav-list">
                    <li>
                      <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                      <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
              </nav>
              <div className="content">
                  <img src={gambar_lightning} alt=""/>
              </div>
              <main className="main">
                  <div className="content-1">
                      
                  </div>
                  <div className="content-2">
                      <h1>Thoma Banner</h1>
                      <div className="sub-content-2">
                          <hr className="line"/>
                          <h4>Phantom Killer</h4>
                      </div>
                      <p>Thoma Banner Art made By Nazario Safariesqi Tyo Widjaya
                      </p>
                      <button><p>SEE COLLECTION</p></button>
                  </div>
                  <div className="content-3">
                      <p><i>" With Fire Shield that can protect from any attack abilities "</i></p>
                      <div className="sub-content-3">
                          <hr className="line"/>
                          <h4>Thoma Banner</h4>
                      </div>
                  </div>
              </main>
          </header>
          <Routes>
            <Route path="/public" element={<PublicPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path="/protected" element={<ProtectedPage/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let navigate = useNavigate();
  let auth = useAuth();

  return auth.user ? (
    <p className="welcome">
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
       className="button">
        Sign out
      </button>
    </p>
    
  ) : (
    <p className="welcome">You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest}){
  let auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
}

function PublicPage() {
  return <h3 className="welcome">Public</h3>;
}

function ProtectedPage() {
  return(
    <h3 className="welcome">Protected</h3>
  );
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/protected" } };
  let login = () => {
    auth.signin(() => {
      navigate("/", {replace: true});
    });
  };

  return (
    <div className="login">
      <p className="welcome">You must log in to view the page at {from.pathname}</p>
      <button className="button-2" onClick={login}>Log in</button>
    </div>
  );
}

export default Main;