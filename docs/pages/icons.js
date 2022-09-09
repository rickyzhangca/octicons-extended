import flatMap from 'lodash.flatmap';
import groupBy from 'lodash.groupby';
import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import toast, { Toaster } from 'react-hot-toast';
import copy from 'copy-to-clipboard';
import icons from '../../libs/build/data.json';
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
  TooltipContent,
  TooltipText,
  CategoryText,
  TopBarContainer,
} from './icons.styles';
import Search from '../components/search';

const assembleSvg = (icon) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${icon.width} ${icon.height}" width="${icon.width}" height="${icon.height}">${icon.path}</svg>`;
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
      <TopBarContainer>
        <Search
          autoFocus
          ariaLabel='search'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search'
        />
        <Button
          text={showAllSizes ? 'Show all sizes' : 'Only show 24px'}
          onClick={() => {
            setShowAllSizes(!showAllSizes);
          }}
        />
      </TopBarContainer>
      {Object.entries(iconsByCategory).length > 0 ? (
        <Tooltip.Provider delayDuration={0} disableHoverableContent>
          {Object.entries(iconsByCategory).map(([category, icons]) => (
            <div key={category}>
              <CategoryHeaderContainer>
                <CategoryText>{category}</CategoryText>
                <CategoryHeaderDivider />
              </CategoryHeaderContainer>
              <IconsGrid>
                {icons.map((icon) => {
                  <Tooltip.Root key={`${icon.name}-${icon.height}`}>
                    <Tooltip.Trigger asChild>
                      <IconWrapper
                        onClick={() => {
                          copy(assembleSvg(icon));
                          toast.custom(
                            <Toast>
                              <ToastText>SVG copied!</ToastText>
                            </Toast>,
                            { duration: 400 }
                          );
                        }}>
                        <Icon
                          width={icon.width}
                          height={icon.height}
                          path={icon.path}
                        />
                      </IconWrapper>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <TooltipContent side='bottom' sideOffset={-4}>
                        <TooltipText>{icon.name}</TooltipText>
                      </TooltipContent>
                    </Tooltip.Portal>
                  </Tooltip.Root>;
                })}
              </IconsGrid>
            </div>
          ))}
        </Tooltip.Provider>
      ) : (
        <p>No results found</p>
      )}
    </Container>
  );
};

export default Icons;
