import Title2 from "../main-page-components/Title2";
import Accordions from "../main-page-components/Accordions";
import MainData from "../data/MainData";

function News({ newsData }) {
  return (
    <div className="news">
      <Title2 title2={'Latest news in Venture Capital '}></Title2>
      <Accordions accordionsData={newsData['accordionsData']}></Accordions>
    </div>
  )

}

export default News;