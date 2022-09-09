import flatMap from 'lodash.flatmap';
import groupBy from 'lodash.groupby';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import toast, { Toaster } from 'react-hot-toast';
import copy from 'copy-to-clipboard';
import icons from '../../libs/build/sortedData.json';
import useSearch from '../hooks/useSearch';
import Icon from '../components/icon';
import Button from '../components/button';
import Container, {
  CategoryHeaderContainer,
  CategoryHeaderDivider,
  IconsGrid,
  IconWrapper,
  Toast,
  ToastText,
  CategoryText,
  TopBarContainer,
  NoResultsWrapper,
} from './icons.styles';
import Search from '../components/search';

const assembleSvg = (icon) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${icon.width} ${icon.height}" width="${icon.width}" height="${icon.height}">${icon.path}</svg>`;
};

const renderIcon = (icon) => {
  return (
    <IconWrapper
      key={`${icon.name}-${icon.height}`}
      data-tip={icon.name}
      onClick={() => {
        copy(assembleSvg(icon));
        toast.custom(
          <Toast>
            <ToastText>{`SVG copied 👍 ${icon.name}`}</ToastText>
          </Toast>,
          { duration: 400 }
        );
      }}>
      <Icon width={icon.width} height={icon.height} path={icon.path} />
    </IconWrapper>
  );
};

const Icons = () => {
  const [query, setQuery] = React.useState('');
  const [showAllSizes, setShowAllSizes] = React.useState(false);
  const iconsArray = React.useMemo(() => {
    return flatMap(Object.values(icons), (icon) => {
      return Object.entries(icon.heights).map(([height, value]) => ({
        name: icon.name,
        width: value.width,
        height,
        path: value.path,
        category: icon.category,
      }));
    });
  }, []);
  const results = useSearch(iconsArray, query, { keys: ['name'] });
  const iconsByCategory = React.useMemo(
    () => groupBy(results, 'category'),
    [results]
  );
  return (
    <Container>
      <Toaster position={'bottom-center'} />
      <ReactTooltip
        type='dark'
        effect='solid'
        className='tooltip'
        place='bottom'
        offset={{ top: 4 }}
        isCapture
      />
      <TopBarContainer>
        <Search
          autoFocus
          ariaLabel='search'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search'
        />
        <Button
          text={showAllSizes ? 'Only show 24px' : 'Show all sizes'}
          onClick={() => {
            setShowAllSizes(!showAllSizes);
          }}
        />
      </TopBarContainer>
      {Object.entries(iconsByCategory).length > 0 ? (
        Object.entries(iconsByCategory).map(([category, icons]) => (
          <div key={category}>
            <CategoryHeaderContainer>
              <CategoryText>{category}</CategoryText>
              <CategoryHeaderDivider />
            </CategoryHeaderContainer>
            <IconsGrid>
              {icons.map((icon) => {
                if (showAllSizes || (!showAllSizes && icon.height === '24')) {
                  return renderIcon(icon);
                }
              })}
            </IconsGrid>
          </div>
        ))
      ) : (
        <NoResultsWrapper>
          <p>
            No results found. You can create an icon request{' '}
            <a
              href='https://github.com/rickyzhangca/octicons-extended/issues'
              target='_blank'
              rel='noreferrer'>
              here
            </a>{' '}
            and we&apos;ll get back to you soon!
          </p>
        </NoResultsWrapper>
      )}
    </Container>
  );
};

export default Icons;
