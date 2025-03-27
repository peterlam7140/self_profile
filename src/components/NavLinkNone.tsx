import { useLocation } from 'react-router-dom';

function NavLinkNone({ to, clickEvent, children }: { to: string; clickEvent?: React.MouseEventHandler<HTMLAnchorElement>; children: React.ReactNode }) {
  const location = useLocation();

  return (
    <a className={(location.pathname).indexOf(to) == 0 ? 'router-link-none router-link-active' : 'router-link-none'} onClick={clickEvent}>{ children }</a>
  );
}

export default NavLinkNone;