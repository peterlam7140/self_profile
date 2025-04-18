import PhotoswipeGallery from '../components/PhotoswipeGallery'

function Spring() {
    return (
      <div>
        <h1>Spring-Boot-App</h1>
        {/* <div className="sub-title">title</div> */}
        <h2>Skill Set</h2>
        <ul className="article-tag">
          <li>Java</li>
          <li>Spring Boot</li>
          <li>JPA</li>
        </ul>
        <section>
            <h2>Source Code</h2>
            <a className="button" href="https://github.com/peterlam7140/Spring-Boot-App" target="_blank">Git Hub</a>
        </section>
        <section>
          <h2>Photo</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/spring-boot/p1.jpeg",
            import.meta.env.BASE_URL + "img/context/spring-boot/p2.jpeg",
            import.meta.env.BASE_URL + "img/context/spring-boot/p3.jpeg",
            import.meta.env.BASE_URL + "img/context/spring-boot/p4.jpeg",
            import.meta.env.BASE_URL + "img/context/spring-boot/p5.jpeg",
            import.meta.env.BASE_URL + "img/context/spring-boot/p6.jpeg",
            import.meta.env.BASE_URL + "img/context/spring-boot/p7.jpeg",
          ]}/>
        </section>
      </div>
    );
}

export default Spring;