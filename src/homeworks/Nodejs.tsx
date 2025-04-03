import PhotoswipeGallery from '../components/PhotoswipeGallery'

function Nodejs() {
    return (
      <div>
        <h1>nodejs-restful</h1>
        {/* <div className="sub-title">title</div> */}
        <h2>Skill Set</h2>
        <ul className="article-tag">
          <li>node.js</li><li>mongodb</li><li>express</li>
        </ul>
        <section>
          <h2>Photo</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/nodejs-restful/p01.jpeg",
            import.meta.env.BASE_URL + "img/context/nodejs-restful/p02.jpeg",
            import.meta.env.BASE_URL + "img/context/nodejs-restful/p03.jpeg",
            import.meta.env.BASE_URL + "img/context/nodejs-restful/p04.jpeg",
            import.meta.env.BASE_URL + "img/context/nodejs-restful/p05.jpeg",
            import.meta.env.BASE_URL + "img/context/nodejs-restful/p06.jpeg",
        ]}/>
        </section>
      </div>
    );
}

export default Nodejs;