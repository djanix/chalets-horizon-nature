interface IconProps {
  icon: string;
  size?: number;
}

export default function Icon({ icon, size }: IconProps) {
  return <span className={size ? `material-icons-outlined text-[${size}px]` : 'material-icons-outlined'}>{icon}</span>;
}
