import styled from 'styled-components';

import Logo from '../../../assets/images/logo-won-dark.svg';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.main.colors.won.blue};
  padding-left: 2rem;
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: $white;

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 12.5rem;
  }
`;



export default Wrapper;
