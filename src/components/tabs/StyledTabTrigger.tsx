import * as Tabs from '@radix-ui/react-tabs';
import type { TabName } from '../Results';

type Props = {
  value: TabName,
  children: React.ReactNode,
  [key: string]: unknown,
}
export default function StyledTabTrigger({value, children, ...props}: Props) {
  return (
    <Tabs.Trigger
      className="px-5 py-2 rounded data-[state=active]:bg-stone-900 data-[state=inactive]:text-stone-400 transition-all duration-100"
      value={value} {...props}>{children}</Tabs.Trigger>
  );
}
