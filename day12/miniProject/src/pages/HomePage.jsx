import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CategoryList from '../components/CategoryList'

const HomePage = (props) => {
    const {text,handleSearchText}=props;
  return (
    <div>
        <Header text={text} handleSearchText={handleSearchText} />
        <main>
            <h1>Main</h1>
            <CategoryList/>
        </main>
        <Footer/>
    </div>
  )
}

export default HomePage