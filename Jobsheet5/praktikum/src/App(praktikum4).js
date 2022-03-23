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

export default function AuthExample() {
    return (
    <ProvideAuth>
        <Router>
            <div>
                <AuthButton />

           <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

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
            <p>
            Welcome!{" "}
          <button
        onClick={() => {
           auth.signout(() => navigate("/"));
        }}
       >
         Sign out
       </button>
     </p>
    ) : 
    (
     <p>You are not logged in.</p>
    );
}

function PrivateRoute({ children, ...rest}){
  let auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
    return(

    <h3>Protected</h3>
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
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
   </div>
    );
}