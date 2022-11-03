import { Routes, Route, Link } from 'react-router-dom';
import CatApp from './components/cats/CatApp';
import WeatherApp from './components/weather/WeatherApp';
import YouTubeApp from './components/youtube/components/YouTubeApp';
import Menu from './Menu';
const App = () => {
    return(
        <>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />}/>    
                <Route path='catApp' element={<CatApp />} />
                <Route path='weatherApp' element={<WeatherApp />} />
                <Route path='youtubeApp' element={<YouTubeApp />} />
            </Routes>    
        </>
    )
}

export default App;

const Home = () => {
    return(
        <div>
            <h2>Home Page</h2>
        </div>
    )
}
