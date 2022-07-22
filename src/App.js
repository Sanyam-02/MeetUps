import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/Layout/Layout'

function App() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/" element={<AllMeetupsPage />}></Route>
                <Route exact path="/new-meetup" element={<NewMeetupPage />}></Route>
                <Route exact path="/favorites" element={<FavoritesPage />}></Route>
            </Routes>
        </Layout>
    );
}

export default App;
