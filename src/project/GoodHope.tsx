import PhotoswipeGallery from '../components/PhotoswipeGallery'

function GoodHope() {
    return (
      <div>
        <h1>Secondary School and Landing Website</h1>
        <div className="sub-title">Good Hope School</div>
        <h2>Skill Set</h2>
        <ul className="article-tag">
          <li>Angular</li>
          <li>PHP</li>
        </ul>
        {/* <section>
          <h2>Description</h2>
          <p></p>
        </section> */}
        <section>
          <h2>Highlight</h2>
          <ul>
            <li>Developed and maintained full-stack web applications using Angular for the front-end and PHP for the CMS</li>
            <li>Implemented Google OAuth 2.0 for user authentication</li>
            <li>Developed application process for Secondary One admissions</li>
          </ul>
        </section>
        <section>
          <h2>Photos</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/ghs/p1.jpeg",
            import.meta.env.BASE_URL + "img/context/ghs/p2.jpeg",
            import.meta.env.BASE_URL + "img/context/ghs/p3.jpeg",
            import.meta.env.BASE_URL + "img/context/ghs/p4.jpeg",
            import.meta.env.BASE_URL + "img/context/ghs/p5.jpeg",
            import.meta.env.BASE_URL + "img/context/ghs/p6.jpeg",
          ]}/>
        </section>
      </div>
    );
}

export default GoodHope;