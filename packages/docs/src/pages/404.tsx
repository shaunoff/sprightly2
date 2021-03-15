import { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function NotFoundPage(): ReactElement {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1 className="text-4xl font-bold font-sans mb-6">404: Not Found</h1>
      <p className="mb-6">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </Layout>
  );
}

export default NotFoundPage;
