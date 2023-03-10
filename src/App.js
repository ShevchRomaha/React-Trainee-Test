import React from "react";
import "./App.css";
import axios from 'axios'
import Book from './components/Book/Book';
import BookFilter from './components/BookFilter/BookFilter';
import Cart from './components/Cart/Cart';

function App() {
 const [booksData, setBooksData] = React.useState([])
 const [orderBy, setOrderBy] = React.useState(false)
 const [totalOrders, setTotalOrders] = React.useState([])
 const [ordersPrice, setOrdersPrice] = React.useState(0)

 
 React.useEffect(() =>{
   getData()
 },[])

 async function getData(){
  try{
  let response = await axios.get('./books.json')
   setBooksData(response.data)
  }catch(err){
    console.log(err)
  }
   }
  
  const filterBooks = (value) =>{
      const filteredData = booksData.filter(book =>{
        return book.category.toLowerCase().includes(value.toLowerCase())
      })
      setBooksData(filteredData)
  }

  const sortBooks = () =>{
    const copyData = booksData.slice()
    if(!orderBy){
      const sortedByAsc = copyData.sort((a,b) => a.price > b.price ? 1 : -1)
      setBooksData(sortedByAsc)
      setOrderBy(!orderBy)
    }else{
      const sortedByDesc = copyData.sort((a,b) => a.price > b.price ? -1 : 1)
      setBooksData(sortedByDesc)
      setOrderBy(!orderBy)
    }
  }

  const totalPrice = (book) => {
     totalOrders.push(book)
     let ordersSum = totalOrders.reduce((sum, current) => sum + current.price, 0)
     setOrdersPrice(ordersSum)
  }


  return (
    <div className="wrapper">
      <div className="app">
        <div className="app__body">
          <h2>Books</h2>
          <div>
            <BookFilter orderBy={orderBy} sortBooks={sortBooks} filterBooks={filterBooks} />
          </div>
          {booksData.map(book => (
              <Book totalPrice={totalPrice} key={book.id} book={book} />
          ))
          }
        </div>
        <div className="app__cart">
          <Cart ordersPrice={ordersPrice} />
        </div>
        </div>
      </div>
  );
}

export default App;
