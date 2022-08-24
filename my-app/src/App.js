import { Route, Routes } from "react-router-dom";

import Header from './Header';
// import Footer from './Footer';
import Login from './Login'
import Upload from './Upload.js'
import Feed from "./Feed";
import Main from './Main'

//Redux
import Store from "./app/Store";
import { Provider } from "react-redux";

import './stylecss.css'

function App() {
  return (
   <>
   <Provider store={Store}>
     <Header />
     <Routes>
     <Route path="user" element={<Login />} />

     
     <Route path='post'>
        <Route path='list' element={<Feed />} />
        <Route path='upload' element={<Upload />} />
     </Route>
     <Route path='/' element={<Main />} />   


    {/* <Footer /> */}
    </Routes>
   </Provider>
   </>
  );
}

export default App;
