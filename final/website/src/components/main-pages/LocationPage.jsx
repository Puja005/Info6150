import Title2 from "../main-page-components/Title2";
import Texts from "../main-page-components/Texts";
import Cards from "../main-page-components/Cards";
import '../../css/location.css';
import Panels from '../main-page-components/Panels'

function LocationPage({ locationPageData, useCards, usePanels }) {
  return (
    <div className="location">
      <Title2 title2={locationPageData['title']}></Title2>
      <Texts texts={locationPageData['text']}></Texts>
      {useCards && <Cards cardsData={locationPageData['cards']}></Cards>}
      {usePanels && <Panels panelsData={locationPageData['panels']}></Panels>}
    </div>
  )
}

export default LocationPage;