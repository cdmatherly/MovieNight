import Navbar from '../components/Navbar';
import { Link, Outlet } from 'react-router-dom';

function Main() {

    return (
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 mb-5 mt-20">
            <Navbar />
            <Outlet/>
        </div>
    );
}

export default Main;
