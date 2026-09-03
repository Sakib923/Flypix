import Footer from '@/components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { Outlet, ScrollRestoration } from 'react-router';
import TailwindDev from '../test/TailwindDev.jsx';

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <TailwindDev />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    );
}