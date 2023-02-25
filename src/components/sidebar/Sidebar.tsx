import StyledLink from '../link/StyledLink';

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
      <StyledLink
        key={link.path}
        className="mb-3 text-blue-500"
        classNameActive="font-bold border-l-4 border-blue-500 pl-2"
        to={link.path}
      >
        {link.label}
      </StyledLink>
    );
  });

  return (
    <div className="flex flex-col items-start   overflow-y-auto">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
