import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";

interface defaultLayout {
    children: React.ReactNode;
}
  
const DefaultLayout:React.FC<defaultLayout> = ({children}) => {
    return (
        <div>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default DefaultLayout