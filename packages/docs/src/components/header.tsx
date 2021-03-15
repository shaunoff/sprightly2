import { ReactElement } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

interface HeaderProps {
  siteTitle?: string;
}

function Header({ siteTitle }: HeaderProps): ReactElement {
  return (
    <header className="bg-purple-600 mb-6">
      <div className="my-0 mx-auto max-w-4xl py-6 px-4">
        <h1 className="m-0 text-4xl font-bold font-sans">
          <Link to="/" className="text-white no-underline">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
