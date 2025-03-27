import { useLocation } from 'react-router-dom';

function NavLinkNone({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();

  return (
    <a className={(location.pathname).indexOf(to) == 0 ? 'router-link-none router-link-active' : 'router-link-none'}>{ children }</a>
  );
}

export default NavLinkNone;