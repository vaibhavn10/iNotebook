import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Topbar from "./components/Topbar";
import Auth from "./components/Auth";
import ToTop from "./components/ToTop";
import Dashboard from "./components/Dashboard";
import LoadingBar from "react-top-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";
import Alert from "./components/Alert";
import GoogleLogin from "./components/GoogleLogin";
import GoogleRegister from "./components/GoogleRegister";

function App() {
  const progress = useSelector((state) => state.progress);
  const dispatch = useDispatch();
  // useEffect(() => {}, [window.location.pathname]);

  return (
    <div>
      <LoadingBar
        height={5}
        color="#78c454"
        progress={progress}
        onLoaderFinished={() => dispatch(actions.setProgress(0))}
      />
      <BrowserRouter>
        {!(window.location.pathname == "/dashboard" || window.location.pathname == "/auth/googlelogin" || window.location.pathname == "/auth/googleregister") && <Topbar />}
        <div
          className={`${
            window.location.pathname == "/dashboard" ? "" : "pt-[72px]"
          }`}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/auth/:auth" element={<Auth />} />
            <Route exact path="/auth/googlelogin" element={<GoogleLogin />} />
            <Route exact path="/auth/googleregister" element={<GoogleRegister />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <ToTop />
        <Alert/>
      </BrowserRouter>
    </div>
  );
}

export default App;
