function Flask() {
    return (
      <div>
        <h1>Flask</h1>
        {/* <div className="sub-title">title</div> */}
        <h2>Skill Set</h2>
        <ul className="article-tag">
          <li>Python</li>
          <li>Flask</li>
        </ul>
        <section>
            <h2>Source Code</h2>
            <a className="button" href="https://github.com/peterlam7140/python-flask" target="_blank">Git Hub</a>
        </section>
        <section>
          <h2>Description</h2>
          <p>Stored testing file into test folder, all server code stored in src folder. This is like a MVC, s00000000_server.py is a controller component, that receive requests and reply message that the client want. All inside the model folder are model components, that provide business logic to controller do operations. No view component file because the server only provide web service.</p>
        </section>
      </div>
    );
  }
  
  export default Flask;