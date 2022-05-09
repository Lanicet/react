import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
const store = configureStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<UsersList />} />
        <Route path="/user/:id/posts" element={<PostsList />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
