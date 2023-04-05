import '../css/home.css'

const h2s = ['Playing with Jerry', 'Richie rich']
const paragraphs = [['Lorem ipsum dolor sit amet. Quisque quis justo lacus. Phasellus condimentum est vitae orcialiquam, vel interdum ante porttitor.',
  'Lorem ipsum dolor mi. Quisque quis justo lacus. Phasellus condimentum est vitae orci aliquam, velinterdum ante porttitor.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed eleifend nunc. Vivamus nec pharetra mi. Quisque quis justo lacus. Phasellus condimentum est vitae orci aliquam, vel interdum ante porttitor.'],
  ['Lorem ipsum dolor sit amet. Quisque quis justo lacus. Phasellus condimentum est vitae orcialiquam, vel interdum ante porttitor.',
  'Lorem ipsum dolor mi. Quisque quis justo lacus. Phasellus condimentum est vitae orci aliquam, velinterdum ante porttitor.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed eleifend nunc. Vivamus nec pharetra mi. Quisque quis justo lacus. Phasellus condimentum est vitae orci aliquam, vel interdum ante porttitor.']];



function Home() {
  return (<main>
    {h2s.map((title, index) => {
      return (
        <div className="panel" key={index}>
          <img src="http://placekitten.com/400/400" alt="Brown cat" />
          <div key={index}>
            <h2>{title}</h2>
            {paragraphs[index].map((paragraph, index2) => {
              return <p key={index * 10 + index2}>{paragraph}</p>
            })}
          </div>
        </div>
      )
    })}

  </main>)
}

export default Home;