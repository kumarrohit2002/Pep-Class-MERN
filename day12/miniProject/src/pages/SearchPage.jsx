import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchResult from '../components/SearchResult';

const SearchPage = (props) => {
    const {text,handleSearchText}=props;

  return (
    <div>
        <Header text={text} handleSearchText={handleSearchText}/>
        <main>
             <p>
                    Search results for:
                    <span className="text-red-800 font-bold">{text}</span>
                </p>
                <SearchResult searchQuery={text} />
        </main>
        <Footer/>
    </div>
  )
}

export default SearchPage