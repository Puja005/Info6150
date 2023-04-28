import '../css/main.css'

import Home from './main-pages/Home';
import MainData from './data/MainData';
import News from './main-pages/News';
import LocationPage from './main-pages/LocationPage';
import Join from './main-pages/Join';

function Main({ page }) {
  return (
    <main>
      {page === 'home' && <Home data={MainData['Home']}></Home>}
      {page === 'news' && <News newsData={MainData['News']}></News>}
      {page === 'California' && <LocationPage locationPageData={MainData['LocationPage']['California']} useCards={true} usePanels={false}></LocationPage>}
      {page === 'Seattle' && <LocationPage locationPageData={MainData['LocationPage']['Seattle']} useCards={false} usePanels={true}></LocationPage>}
      {page === 'join' && <Join></Join>}
    </main>
  )
}

export default Main;