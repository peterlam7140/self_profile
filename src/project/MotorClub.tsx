import PhotoswipeGallery from '../components/PhotoswipeGallery'

function MotorClub() {
    return (
      <div>
        <h1>Hong Kong Motor Club</h1>
        {/* <div className="sub-title">title</div> */}
        <h2>Skill Set</h2>
        <ul className="article-tag">
          <li>PHP</li>
        </ul>
        {/* <section>
          <h2>Description</h2>
          <p>content</p>
        </section> */}
        <section>
          <h2>Highlight</h2>
          <ul>
            <li>Developed and maintained full-stack web applications using PHP for the front-end and CMS</li>
            <li>Developed a product search function, enabling users to quickly find products with criteria</li>
            <li>Implemented login and registration process, using phone number to map accounts</li>
            <li>Implemented News and Event Section, Enquiry Form</li>
            <li>Implemented Shopping Cart and Checkout process</li>
          </ul>
        </section>
        <section>
          <h2>Photos</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/motorclub/p1.jpeg",
            import.meta.env.BASE_URL + "img/context/motorclub/p2.jpeg",
            import.meta.env.BASE_URL + "img/context/motorclub/p3.jpeg",
            import.meta.env.BASE_URL + "img/context/motorclub/p4.jpeg",
          ]}/>
        </section>
      </div>
    );
}

export default MotorClub;