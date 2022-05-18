import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
// import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home currentPage ={currentPage} handlePageChange={handlePageChange} />;
        }
        if (currentPage === "About") {
            return <About title={"About Me"} />
        }
        // if (currentPage === "Skills") {
        //     return <Skills />
        // }
        if (currentPage === "Projects") {
            return <Projects title={"My Projects"} />
        }
        return <Contact />
    };


    return (
        <div>
            {/* Appending currentPage from the useState above and the handlePageChange function to update the page */}
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* This renderPage function will return a components depending on the conditiona */}
            {renderPage()}
        </div>
    )
}
