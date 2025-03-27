import { NavLink } from 'react-router-dom';

function NavLinkCustom({ to, clickEvent, children }: { to: string; clickEvent?: React.MouseEventHandler<HTMLAnchorElement>; children: React.ReactNode }) {
  return (
    <NavLink to={ to } className={({ isActive }) => isActive ? 'router-link-custom router-link-active' : 'router-link-custom' } onClick={clickEvent}>{ children }</NavLink>
  );
}

export default NavLinkCustom;