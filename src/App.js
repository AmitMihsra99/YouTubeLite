import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {Feed,Navbar, VideoDetails,ChannelDetails,SearchFeed} from "./Components"
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Box sx={{ background: "#000" }}>
         <Navbar/>  
        <Routes>
           <Route path="/" element={<Feed/>}/>
           <Route path="/video/:id" element={<VideoDetails/>}/>
           <Route path="/channle/:id" element={<ChannelDetails/>}/>
           <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
