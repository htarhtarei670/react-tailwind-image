import '../src/asset/App.css';

import { useEffect, useState } from "react";

// components
import Search from './components/Search';
import Cards from './components/Cards';
import Loading from './components/Loading';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  console.log(search);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=39680227-fccaa494895568fd6478eb3ce&q=${search}&image_type=photo&pretty=true`
    )
      .then(res => (res.json()))
      .then(data =>
        setData(data.hits),
        setIsLoading(false)
      )
      .catch(err=>console.log(err))
  },[search])

  return (
    <div className="container mx-auto">
      <Search onSearch={(input) => setSearch(input)} />

      {!isLoading && data.length ===0 && <h1 className='text-3xl text-red-700 font-bold text-center mt-24'>Image not found!</h1>}
      
      {isLoading ? <Loading/> : <Cards datas={data} />}
    </div>
  );
}

export default App;
