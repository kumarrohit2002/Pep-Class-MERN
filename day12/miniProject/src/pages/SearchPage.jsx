import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchResult from '../components/SearchResult';
import { useSearchParams } from 'react-router';

const SearchPage = (props) => {
    const {text,handleSearchText}=props;
    const [searchParams,setSearchParams]=useSearchParams();

    useEffect(()=>{
      const searchText=searchParams.get('text');
      if(searchText){ // false, null undifind,0 ,"",NAN,[]
        handleSearchText(searchText);
      }
    },[])

    useEffect(()=>{
      setSearchParams((prev)=>{
        prev.set('text',text);
        return prev;
      })
    },[text])

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