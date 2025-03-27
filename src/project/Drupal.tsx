function Drupal() {
    return (
      <div>
        <h1>Drupal Projects</h1>
        {/* <div className="sub-title">title</div> */}
        <h2>Skill Set</h2>
        <ul className="article-tag">
          <li>PHP</li>
          <li>Drupal</li>
        </ul>
        <section>
          <h2>Highlight</h2>
          <ul>
            <li>Responsible for the front-end development, to achieve responsive and user-friendly interfaces</li>
            <li>Configure Drupal configurations, including menu, paragraph, content types, taxonomy, block layout, views, and user permissions, to meet the specific needs of your project</li>
            <li>Configure Drupal webform, enabling users to submit form and send email upon submission</li>
            <li>Developed a search function, enabling users to quickly find articles with criteria</li>
            <li>Implemented an extension to provide bookmark function, allowing users to store and manage content of interest, improving the user experience</li>
          </ul>
        </section>
        <section>
          <h2>Selected Projects</h2>
          <ul>
            <li>HKUST - New Student Orientation Website</li>
            <li>City University of Hong Kong - Centre for Advanced Structural Materials Website</li>
            <li>City University of Hong Kong - Knowledge Transfer Office Website</li>
          </ul>
        </section>
      </div>
    );
  }
  
  export default Drupal;