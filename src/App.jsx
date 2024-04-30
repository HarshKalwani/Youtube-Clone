import { BrowserRouter , Routes , Route } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import VideoDetail from "./components/VideoDetail"
import ChannelDetail from "./components/ChannelDetail"
import SearchFeed from "./components/SearchFeed"



const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor : '#000'}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element = {<Feed/>}></Route>
                <Route path="/videos/:id" exact element = {<VideoDetail/>}></Route>
                <Route path="/channel/:id" exact element = {<ChannelDetail/>}></Route>
                <Route path="/search/:searchTerm" exact element = {<SearchFeed/>}></Route>
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App