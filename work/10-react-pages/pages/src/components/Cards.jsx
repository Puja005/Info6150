import '../css/cards.css'

const cardTitles = ['Brownie', 'Doug', 'Chelsea', 'Bob', 'Tom', 'Jerry']
const goToAntherPage = {
  0: 'home',
  1: 'about',
  3: 'about',
  5: 'home',
}

function Cards({ setPage }) {
  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }

  return (
    <main>
      <div className="cards">
        {cardTitles.map((title, index) => {
          return <div className='card' key={title}>
            <h2 className="card__title">{title}</h2>
            <img className="card__pic" src="http://placekitten.com/300/300" alt="Brown cat" />
            <div className="card__text" key={title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacinia augue. Nam euismod metus augue, sit amet semper augue tristique ac.
             {
                goToAntherPage[index] !== undefined && <a href="" onClick={e => go(e, goToAntherPage[index])}>go to {goToAntherPage[index]}</a>
              } porttitor.
            </div>
          </div>
        })}
      </div>
    </main>
  );
}

export default Cards;