/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter({ version }) {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
      
        &nbsp;
        <A
          href={`https://reactavancado.com.br`}
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Avançado
        </A>
        &nbsp;
        <A href="https://strapi.io" target="_blank" rel="noopener noreferrer">
          — {projectType} Edition
        </A>
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
