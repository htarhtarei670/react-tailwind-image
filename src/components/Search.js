import React, { useState } from 'react'

const Search = ({onSearch}) => {
  const [userSearch, setUserSearch] = useState('');

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    onSearch(userSearch);
  }

  return (
    <div className="search mt-8">
      <form
        onSubmit={submitHandler}
        className="flex justify-center  items-center"
      >
        <input
          onChange={(e) => setUserSearch(e.target.value)}
          className="border w-1/2 md:w-3/12 border-slate-200 rounded-s-lg py-2 px-4 shadow-lg"
          type="text"
          name=""
          id=""
          placeholder="Search images.."
        />
        <button type="submit" className="bg-purple-500  px-4 py-3 rounded-e-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Search
