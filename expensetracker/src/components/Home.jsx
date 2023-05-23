
import { BrowserRouter } from 'react-router-dom';
import ShowData from './ShowData';
import {Routes,Route} from 'react-router';

function Home() {
    
    return(

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ShowData/>}/>


        
        </Routes>
        </BrowserRouter>
       

    )


}


export default Home;