import PhotoswipeGallery from '../components/PhotoswipeGallery'

function ECard() {
    return (
      <div>
        <h1>eCard.pro</h1>
        {/* <div className="sub-title"></div> */}
        <h2>Skill Set</h2>
        <ul className="article-tag">
          <li>PHP</li>
        </ul>
        {/* <section>
          <h2>Description</h2>
          <p></p>
        </section> */}
        <section>
          <h2>Highlight</h2>
          <ul>
            <li>Developed and maintained full-stack web applications using PHP for the front-end and CMS</li>
            <li>Implemented eCard order flows using PHP</li>
            <li>Developed eCard display controls, providing users with customizable options and a responsive interface</li>
            <li>Developed a 'favorite eCard' page, allowing users to save and manage their preferred eCards, enhancing user engagement and personalization</li>
          </ul>
        </section>
        <section>
          <h2>Photos</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/ecard/p1.jpeg",
            import.meta.env.BASE_URL + "img/context/ecard/p2.jpeg",
            import.meta.env.BASE_URL + "img/context/ecard/p3.jpeg",
            import.meta.env.BASE_URL + "img/context/ecard/p4.jpeg",
          ]}/>
        </section>
      </div>
    );
  }

  export default ECard;