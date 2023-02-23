import Link from '../link/Link';

const Sidebar: React.FC<{}> = (props) => {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
    { label: 'Counter', path: '/counter' },
    { label: 'Drag And Drop', path: '/drag' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.path}
        className="mb-3"
        classNameActive="font-bold border-l-4 border-blue-500 pl-2"
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="flex flex-col items-start   overflow-y-auto">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
