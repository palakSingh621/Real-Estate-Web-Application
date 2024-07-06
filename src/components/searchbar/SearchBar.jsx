import { useState } from 'react';
import './searchbar.scss'

const types=["buy","rent"]

function SearchBar(){
    const [query,setQuery]=useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    });
    
    const switchType= (val)=>{
        setQuery((prev)=>({...prev ,type:val}));
    };

    return (
        <div className="searchbar">
            <div className="type">
            {types.map((type)=>(
                <button 
                key={type}
                onClick={()=>switchType(type)}
                className={query.type === type? "active" : ""}>
                {type}</button>
            ))}

            </div>
            <form>
                <input type='text' className='location' placeholder='City Location'/>
                <input type='number' className='minPrice' placeholder='Min Price' min={0} max={1000000000}/>
                <input type='number' className='maxPrice' placeholder='Max Price' min={0} max={1000000000}/>
                <button>
                    <img src='/search.png' alt=''/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;