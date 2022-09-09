import React from 'react';
import Button from '../components/button';
import Logo from '../components/logo';

import { Title, Subtitle, StatTitle } from '../components/typography.styles';

import Icons from './icons';

import Container, {
  StatBlock,
  HeaderContainer,
  SidePanelContainer,
  StatBlockContainer,
  TitleContainer,
  ButtonsContainer,
  SidePanelContainerUpper,
} from './home.styles';
import {
  DownloadIcon,
  FigmaIcon,
  MarkGithubIcon,
  NpmIcon,
} from 'octicons-extended-react';

const SidePanel = () => {
  return (
    <SidePanelContainer>
      <SidePanelContainerUpper>
        <HeaderContainer>
          <Logo />
          <TitleContainer>
            <Title>Octicons Extended</Title>
            <Subtitle>
              A handcrafted extension to GitHub’s beautiful Octicons
            </Subtitle>
          </TitleContainer>
        </HeaderContainer>
        <StatBlockContainer>
          <StatBlock>
            <StatTitle>2.1K</StatTitle>
            <p>Icons</p>
          </StatBlock>
          <StatBlock>
            <StatTitle>20</StatTitle>
            <p>Categories</p>
          </StatBlock>
          <StatBlock>
            <StatTitle>MIT</StatTitle>
            <p>Open-source</p>
          </StatBlock>
          <StatBlock>
            <StatTitle>100%</StatTitle>
            <p>Includes original Octicons</p>
          </StatBlock>
        </StatBlockContainer>
      </SidePanelContainerUpper>
      <ButtonsContainer>
        <Button
          icon={<FigmaIcon />}
          text={'Open in Figma'}
          onClick={() => {
            window
              .open(
                'https://www.figma.com/community/file/1150065417044869754',
                '_blank'
              )
              .focus();
          }}
        />
        <Button
          icon={<MarkGithubIcon />}
          text={'View on GitHub'}
          onClick={() => {
            window
              .open(
                'https://github.com/rickyzhangca/octicons-extended',
                '_blank'
              )
              .focus();
          }}
        />
        <Button
          icon={<NpmIcon />}
          text={'Install with npm'}
          onClick={() => {
            window
              .open(
                'https://www.npmjs.com/package/octicons-extended-react',
                '_blank'
              )
              .focus();
          }}
        />
        <Button
          icon={<DownloadIcon />}
          text={'Download SVG'}
          onClick={() => {
            window
              .open(
                'https://github.com/rickyzhangca/octicons-extended/releases',
                '_blank'
              )
              .focus();
          }}
        />
      </ButtonsContainer>
    </SidePanelContainer>
  );
};

const Home = () => {
  return (
    <Container>
      {SidePanel()}
      <Icons />
    </Container>
  );
};

export default Home;
