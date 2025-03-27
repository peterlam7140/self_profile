import { NavLink } from 'react-router-dom';

function NavLinkCustom({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink to={ to } className={({ isActive }) => isActive ? 'router-link-custom router-link-active' : 'router-link-custom' }>{ children }</NavLink>
  );
}

export default NavLinkCustom;