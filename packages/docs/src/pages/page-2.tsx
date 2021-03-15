import { ReactElement } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

function SecondPage(): ReactElement {
  return (
    <Layout>
      <SEO title="Page Two" />
      <h1 className="text-4xl font-bold font-sans mb-6">
        Hi from the second page
      </h1>
      <p className="mb-6">Welcome to page 2</p>
      <p>
        <Link
          className="text-purple-600 underline hover:text-purple-800 active:text-purple-800"
          to="/"
        >
          Go back to the homepage
        </Link>
      </p>
    </Layout>
  );
}

export default SecondPage;
