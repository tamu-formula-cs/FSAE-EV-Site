import React, { useState } from 'react';
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Timeline from './components/timeline'
import CarSection from './components/carSection'
import './cars.css'

export default function Cars(){
    const [selectedYear, setSelectedYear] = useState('AME24');

    return <div className="cars-main-container">
        <Header/>
        <section className="cars-inner-container">
            <h1 className="cars-title">Our Cars</h1>
            <Timeline selectedYear={selectedYear} onSelectYear={setSelectedYear} />
            <CarSection year={selectedYear} />

            <div className="call-to-action">
                <h1>Want to help build cars like these?</h1>
                <button className='get-involved-button'><a href='https://tamuformulaelectric.com/get-involved'>Get involved</a></button>
            </div>
        </section>
        <Footer/>
    </div>
}