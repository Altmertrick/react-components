import Link from '../link/Link';

const Sidebar: React.FC<{}> = (props) => {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link className="mb-4" key={link.path} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return (
    <div className="flex flex-col sticky top-0 overflow-y-scroll">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
