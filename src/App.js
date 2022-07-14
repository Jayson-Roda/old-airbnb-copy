import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data'

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

function App() {
  const cards = Data.map(data => {
    return <Card 
        key={data.id}
        {...data}
      />
  })

  return (
    <div className='container'>
        <Navbar />
        <Hero />
        <section className='cards-list'>
          {cards}
        </section>
    </div>
  );
}

export default App;
