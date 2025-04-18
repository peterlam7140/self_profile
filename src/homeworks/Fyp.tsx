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
        {/* <section>
          <h2>Workload</h2>
          <ul>
            <li>Setup environment using docker</li>
            <li>Developed and implemented API endpoints using Python Flask</li>
            <li>Developed and implemented front-end using React</li>
            <li>Collaborated with a teammates, research and integrate solution found in internet</li>
          </ul>
        </section> */}
          <section>
            <h2>Source Code</h2>
            <ul>
              <li><a className="button" href="https://github.com/pkjSchool/HKMU_FYP" target="_blank">Frontend Repository</a>: The Fontend of the piano learning platform</li>
              <li><a className="button" href="https://github.com/HKMU-13336215/HKMU_FYP_API" target="_blank">Backend Repository</a>: The Databse and MIDI to musicXML function source code</li>
              <li><a className="button" href="https://github.com/KennethNgdev/HKMU_FYP_AI_API" target="_blank">AI Backend Repository</a>: The Add Chord function and Wav to MIDI function source code</li>
            </ul>
        </section>
        
        <section>
          <h2>Video</h2>
          <div className="iframe-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BMaVXcFhxIM?si=a_SAUf1DdHNDKbvf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <br />
          <div className="iframe-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/82DELVW-FGQ?si=CRrf55RzehSQwp2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </section>
        <section>
          <h2>Photo</h2>
          <PhotoswipeGallery list={[
            import.meta.env.BASE_URL + "img/context/fyp/1.png",
            // import.meta.env.BASE_URL + "img/context/fyp/2.png",
            import.meta.env.BASE_URL + "img/context/fyp/3.png",
          ]}/>
        </section>
        <section>
          <h2>Background</h2>
          <p> 
            The COVID-19 pandemic and advances in digital technology have transformed music education, 
            leading to the use of learning videos, apps, and online courses. 
            However, many children struggle to stay motivated and often give up on learning music. 
            Research indicates that a lack of choice in repertoire and parental interference negatively impacts students’ engagement. 
            In reviewing traditional and online piano platforms, we identified key issues such as insufficient engagement, 
            ineffective practice routines, and a lack of personalized learning experiences. 
            To address these challenges, we propose a web application that combines gamification with real-time interaction through MIDI pianos. 
            This innovative platform aims to make learning music theory and piano techniques more appealing, enhancing student motivation. 
            By utilizing AI to customize music styles and offering a game-like experience, our application seeks to inspire users and improve their overall musical skills. 
            Targeted at beginner pianists, it will teach essential skills such as reading sheet music, fingering, and rhythm. 
            Ultimately, our goal is to contribute to the musical culture of Hong Kong by raising music accomplishment and appreciation among users, ensuring a comfortable and enjoyable learning environment.
          </p>
        </section>
        <section>
          <h2>Implemented Features</h2>
          <ul>
            <li>Challenging Gamification-Based Teaching</li>
            <li>Interactive feedback mechanism with MIDI piano</li>
            <li>Daily Tasks</li>
            <li>Various statistics of user learning performance and preference</li>
            <li>transformation of music style</li>
            <li>Wav to Midi Conversion</li>
            <li>Piano character</li>
            <li>User Guidance</li>
            <li>Multiple Languages</li>
          </ul>
        </section>
        <section>
          <h2>Acknowledgments</h2>
          <ul>
            <li>MIDIano</li>
            <li>Open Music Sheet Display (OMSD)</li>
            <li>Bootstrap</li>
            <li>i18next</li>
            <li><a href="https://github.com/bytedance/piano_transcription">Piano Transcription</a></li>
            <li><a href="https://github.com/dbjohnson/midigen">midigen</a></li>
          </ul>
        </section>
      </div>
    );
}

export default Fyp;