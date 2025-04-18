import PhotoswipeGallery from '../components/PhotoswipeGallery'

function Weather() {
    return (
      <div>
        <h1>react-native-weather</h1>
        {/* <div className="sub-title">title</div> */}
        <h2>Skill Set</h2>
        <ul className="article-tag">
          <li>React Native</li>
        </ul>
        <section>
            <h2>Source Code</h2>
            <a className="button" href="https://github.com/peterlam7140/react-native-weather" target="_blank">Git Hub</a>
        </section>
        {/* <section>
          <h2>Description</h2>
          <p>content</p>
        </section> */}
        <section>
          <h2>Highlight</h2>
          <ul>
            <li>Develop draggable component in screen bottom, dragging for expand and collapse</li>
            <li>Request api provided by data.gov.hk and provide multiple languages option</li>
          </ul>
        </section>
        <h2>Features</h2>
        <section>
          <h3>Weather information</h3>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/weather/p01.jpg",
          ]}/>
          <ul>
            <li>Use GPS to get location of use</li>
            <li>Show temperature of user location in HK</li>
          </ul>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/weather/p02.jpg",
            import.meta.env.BASE_URL + "img/context/weather/p03.jpg",
            import.meta.env.BASE_URL + "img/context/weather/p04.jpg",
          ]}/>
          <ul>
            <li>Include local weather / future 9-days / extended outlook forecast</li>
            <li>In future 9-days forecast, weather icon depends on each day situation</li>
          </ul>
        </section>
        <section>
        <h3>UI interaction</h3>
          <ul>
            <li>Animation to toggle slide up/down weather forecast when tap or drug the bar</li>
            <li>Icon for weather at 9-day forecast </li>
            <li>Splash screen</li>
            <li>Tap Real time picture title to toggle accordion collapse or expanded</li>
          </ul>
        </section>
        <section>
        <h3>Zoom in/out picture</h3>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/weather/p11.jpg",
          ]}/>
          <ul>
            <li>Tap image can zoom in/out in new component</li>
          </ul>
        </section>
        <section>
        <h3>Light/Dark mode</h3>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/weather/p05.jpg",
            import.meta.env.BASE_URL + "img/context/weather/p06.jpg",
          ]}/>
          <ul>
            <li>Different color scheme in two modes, Keep user’s eye healthy</li>
          </ul>
        </section>
        <section>
        <h3>Real time picture</h3>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/weather/p07.jpg",
          ]}/>
          <ul>
            <li>Real time picture from every monitoring station, use Cherrio (net crawler) to capture photo from HK Observatory webpage, refresh every minute. Each picture is wrappering in accordion.</li>
          </ul>
        </section>
        <section>
          <h3>Download weather forecast’s PDF</h3>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/weather/p16.png",
            import.meta.env.BASE_URL + "img/context/weather/p17.png",
          ]}/>
          <ul>
            <li>User can save the PDF file of forecast and read it offline/send it to others.</li>
          </ul>
        </section>
        <section>
          <h2>Photos</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/weather/p08.jpg",
            import.meta.env.BASE_URL + "img/context/weather/p09.jpg",
            import.meta.env.BASE_URL + "img/context/weather/p10.jpg",
            import.meta.env.BASE_URL + "img/context/weather/p12.jpg",
            import.meta.env.BASE_URL + "img/context/weather/p13.jpg",
            import.meta.env.BASE_URL + "img/context/weather/p14.jpg",
            import.meta.env.BASE_URL + "img/context/weather/p15.jpg",
          ]}/>
        </section>
      </div>
    );
}
  
export default Weather;