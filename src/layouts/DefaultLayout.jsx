// Tools
import { Outlet } from "react-router-dom";
import './DefaultLayout.scss';

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function DefaultLayout() {
    
    return(

        <div className="container">
            <header className="container__header">
                <Header />  
            </header>
            <main className="container__main">
                <Outlet/>
            </main>
            <footer className="container__footer">
                <Footer/>
            </footer>
        </div>
    )
}


export default DefaultLayout;