// import loadable from '@loadable/component';
import dynamic from 'next/dynamic'
import { IconType } from 'react-icons/';

interface IIconComponent {
  icon: string;
  size?: number;
}
export type IReactIcon = string;

// export const IconComponent: React.FC<IIconComponent> = ({ icon, size }) => {
//   const lib = icon.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ')[0].toLowerCase();
//   const DynamicIconComponent = loadable(() => import(`react-icons/md`), { resolveComponent: (el) => el[icon] }) as IconType;
//   return <DynamicIconComponent size={size} />;
// };

export const IconComponent: React.FC<IIconComponent> = ({ icon, size }) => {
  const lib = icon.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ')[0].toLowerCase();
  const DynamicIconComponent = dynamic(
    () => import(`react-icons/md`) // TODO: support other icon packs (dynamic url based on lib doesn't work)
      .then((el) => el[icon] as any), {
      ssr: false,
      loading: () => <p>...</p>, // TODO: add proper icon loader
    }
  ) as IconType;

  return <DynamicIconComponent size={size} />;
};