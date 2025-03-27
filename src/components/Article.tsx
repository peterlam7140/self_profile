import { useState } from 'react';

function Article({ banner, projectsList, children }: { banner: React.ReactNode; projectsList: React.ReactNode; children: React.ReactNode }) {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);

  return (
    <>
      <div className="article-banner">{ banner }</div>
      <div className="web-border-space">
        <div className="article-wrapper">
          <aside>
            <button className="button submenu-btn" onClick={()=>{ setIsOpenSubmenu(!isOpenSubmenu) }}>Sub Menu</button>
            <nav className={(isOpenSubmenu) ? "active" : ""}>
                { projectsList }
            </nav>
          </aside>
          <article className="article-content">
            { children }
          </article>
        </div>
      </div>
    </>
  );
}

export default Article;