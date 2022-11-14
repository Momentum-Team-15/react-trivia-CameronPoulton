import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Categories } from './components/Categories';
import { Questions } from './components/Questions';


function App() {
  const [category, setCategory] = useState([])
  const [SelectedCategoryId, setSelectedCategoryId] = useState([])
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then(res => setCategory(res.data.trivia_categories))
  }, [])
  console.log(category)
  return (
    <section className='trivia-container'>
      <header><h1>Trivia Game</h1></header>
        {SelectedCategoryId ? (
          <Questions
            selectedCategoryId={setSelectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
            questions={questions} />
            ) : (
            <>  
            {category &&
              <Categories
                setSelectedCategoryId={setSelectedCategoryId}
                category={category} />}
            </>
          )}
      </section>
  )};


export default App;
