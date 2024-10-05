import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import { PageContainer } from './pages/Container/styles';


const App = () => {
    return (
        <PageContainer>
            <Header title="Mangue Tour" />
            <div className='body'>
                <Outlet />
                <SideBar sidebarContent={['Link 1', 'Link 2', 'Link 3']}></SideBar>
            </div>
            <Footer footerText="©Copyright 2024 by Mangue Tour. All rights reversed."></Footer>
        </PageContainer>
    );
};

export default App;
