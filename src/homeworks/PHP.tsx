import PhotoswipeGallery from '../components/PhotoswipeGallery'

function PHP() {
    return (
      <div>
        <h1>PHP CMS System</h1>
        {/* <div className="sub-title">title</div> */}
        <h2>Skill Set</h2>
        <ul className="article-tag">
          <li>PHP</li>
          <li>Docker</li>
        </ul>
        <section>
          <h2>Photo</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/PHP-system/p01.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p02.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p03.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p04.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p05.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p06.jpeg",
          ]}/>
          <h2>Photo</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/PHP-system/p07.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p08.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p09.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p10.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p11.jpeg",
          ]}/>
          <h2>Photo</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/PHP-system/p12.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p13.jpeg",
            import.meta.env.BASE_URL + "img/context/PHP-system/p14.jpeg",
          ]}/>
        </section>
      </div>
    );
}

export default PHP;