import tw from 'tailwind-styled-components';
import * as Tooltip from '@radix-ui/react-tooltip';

const Container = tw.div`
    md:overflow-y-scroll
    flex
    flex-col
    bg-gray-50
    grow
    px-9
    pb-9
`;

export const TopBarContainer = tw.div`
    flex
    flex-row
    gap-2
    items-center
    justify-center
    py-4
    justify-between
`;

export const IconsGrid = tw.div`
    flex
    flex-wrap
    gap-1
`;

export const IconWrapper = tw.div`
    flex
    items-center
    justify-center
    p-3
    border-gray-50
    border-8
    min-w-[4.25rem]
    min-h-[4.25rem]
    hover:bg-gray-200
`;

export const TooltipContent = tw(Tooltip.Content)`
    flex
    items-center
    justify-center
    px-2
    py-1
    bg-gray-900
    shadow
    z-40
`;

export const TooltipText = tw.p`
    text-sm
    font-semibold
    text-white
`;

export const Toast = tw.div`
    flex
    items-center
    justify-center
    px-3
    py-2
    rounded
    bg-gray-900
    shadow-xl
    z-50
`;

export const ToastText = tw.p`
    text-sm
    font-semibold
    text-white
`;

export const CategoryHeaderContainer = tw.div`
    flex
    flex-row
    pl-5
    items-center
    gap-2
    mt-4
`;

export const CategoryHeaderDivider = tw.div`
    h-px
    grow
    bg-gray-300
`;

export const CategoryText = tw.p`
    text-gray-500
    capitalize
`;

// for some reason there has be a a default export
export default Container;
