import tw from 'tailwind-styled-components';

const Container = tw.div`
    flex
    flex-col
    md:flex-row
    w-screen
    h-screen
`;

export const SidePanelContainer = tw.div`
    flex
    flex-col
    shrink-0
    justify-between
    md:w-[22.5rem]
    p-9
    bg-white
    shadow-sm
    md:h-screen
    z-30
    gap-6
`;

export const SidePanelContainerUpper = tw.div`
    flex
    flex-col
    gap-6
    md:gap-9
`;

export const HeaderContainer = tw.div`
    flex
    flex-col
    gap-5
`;

export const TitleContainer = tw.div`
    flex
    flex-col
    md:gap-2
`;

export const StatBlock = tw.div`
    flex
    flex-col
`;

export const StatBlockContainer = tw.div`
    flex
    flex-row
    flex-wrap
    gap-x-8
    gap-y-4
`;

export const ButtonsContainer = tw.div`
    flex
    flex-col
    gap-1
`;

// for some reason there has be a a default export
export default Container;
