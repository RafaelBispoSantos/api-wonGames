
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from '../../components/PageTitle';
import { ALink, Block, Container, LinkWrapper, P, Separator } from './components';
import SocialLink from './SocialLink';
const FIRST_BLOCK_LINKS = [
  {
    link:
      'https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#_4-create-a-category-content-type',
    contentId: 'app.components.BlockLink.documentation.content',
    titleId: 'app.components.BlockLink.documentation',
  },
  {
    link: 'https://github.com/strapi/foodadvisor',
    contentId: 'app.components.BlockLink.code.content',
    titleId: 'app.components.BlockLink.code',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    link: 'https://github.com/strapi/strapi/',
  },
  {
    name: 'Discord',
    link: 'https://discord.strapi.io/',
  },
  {
    name: 'Reddit',
    link: 'https://www.reddit.com/r/Strapi/',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/strapijs',
  },
  {
    name: 'Blog',
    link: 'https://strapi.io/blog',
  },
  {
    name: 'Forum',
    link: 'https://forum.strapi.io',
  },
  {
    name: 'Careers',
    link: 'https://strapi.io/careers',
  },
];

const HomePage = ({ history: { push } }) => {
  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">Bem vindos a Won Games</h2>
              <P>Ao lado Voce pode inserir diferentes jogos, categoria e publishers para a nossa maravilhosa loja de jogos</P>




              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {FIRST_BLOCK_LINKS.map((data, index) => {
                  const type = index === 0 ? 'doc' : 'code';

                  return (
                    <LinkWrapper href={data.link} target="_blank" key={data.link} type={type}>
                      <FormattedMessage id={data.titleId}>
                        {title => <p className="bold">{title}</p>}
                      </FormattedMessage>
                      <FormattedMessage id={data.contentId}>
                        {content => <p>{content}</p>}
                      </FormattedMessage>
                    </LinkWrapper>
                  );
                })}
              </div>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <FormattedMessage id="HomePage.community">{msg => <h2>{msg}</h2>}</FormattedMessage>
              <FormattedMessage id="app.components.HomePage.community.content">
                {content => <P style={{ marginTop: 7, marginBottom: 0 }}>{content}</P>}
              </FormattedMessage>
              <FormattedMessage id="HomePage.roadmap">
                {msg => (
                  <ALink
                    rel="noopener noreferrer"
                    href="https://portal.productboard.com/strapi/1-public-roadmap/tabs/2-under-consideration"
                    target="_blank"
                  >
                    {msg}
                  </ALink>
                )}
              </FormattedMessage>

              <Separator style={{ marginTop: 18 }} />
              <div
                className="row social-wrapper"
                style={{
                  display: 'flex',
                  margin: 0,
                  marginTop: 36,
                  marginLeft: -15,
                }}
              >
                {SOCIAL_LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
