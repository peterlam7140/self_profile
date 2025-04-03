import PhotoswipeGallery from '../components/PhotoswipeGallery'

function Fyp() {
    return (
      <div>
        <h1>Final Year Project</h1>
        {/* <div className="sub-title">title</div> */}
        <h2>Skill Set</h2>
        <ul className="article-tag">
          <li>Python</li>
          <li>Flask</li>
          <li>React</li>
          <li>Docker</li>
        </ul>
        <section>
          <h2>Description</h2>
          <ul>
            <li>Playing piano music using Midi keyboard with interactive interface that include sheet music</li>
            <li>Provide AI model to translate music style in piano sheet music</li>
            <li>Provide question about piano skill and knowledge</li>
          </ul>
        </section>
        <section>
          <h2>Workload</h2>
          <ul>
            <li>Setup environment using docker</li>
            <li>Developed and implemented API endpoints using Python Flask</li>
            <li>Developed and implemented front-end using React</li>
            <li>Collaborated with a teammates, research and integrate solution found in internet</li>
          </ul>
        </section>
        <section>
          <h2>Photo</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/fyp/1.png",
            import.meta.env.BASE_URL + "img/context/fyp/2.png",
            import.meta.env.BASE_URL + "img/context/fyp/3.png",
          ]}/>
        </section>
      </div>
    );
}

export default Fyp;