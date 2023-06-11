import * as Tabs from '@radix-ui/react-tabs';
import Loading from '../Loading';
import type { TabName } from '../Results';

type Props = {
  value: TabName,
  children: React.ReactNode,
  loading: boolean,
  [key: string]: unknown,
}
export default function StyledTabContent({value, children, loading, ...props}: Props) {
  return (
    <Tabs.Content value={value} {...props}>
      <div className="my-5 py-10 px-3 rounded bg-stone-800">
        { loading
          ? <div className="text-center"><Loading /></div>
          : children
        }
      </div>
    </Tabs.Content>
  );
}
