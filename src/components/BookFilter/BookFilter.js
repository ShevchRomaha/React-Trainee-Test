import React from 'react'
import './BookFilter.scss'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/down.svg'

const BookFilter = ({filterBooks, sortBooks, orderBy}) => {
    const onSelectChange = (e) =>{
       filterBooks(e.target.value)
    }
  return (
    <div className="book-filter">
      <div className="book-filter__title" onClick={() => sortBooks()}>
        <p><b>orderBy</b></p><span><img src={orderBy ? arrowUp : arrowDown} alt="arrow" /></span>
      </div>
      <div>
        <select onChange={onSelectChange}>
            <option value="animals">animals</option>
            <option value="tourizm">tourizm</option>
            <option value="parfum">parfum</option>
            <option value="music">music</option>
            <option value="food">food</option>
        </select>
        </div>
    </div>
  )
}

export default BookFilter