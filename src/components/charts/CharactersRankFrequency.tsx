import { CartesianGrid, XAxis, YAxis, ZAxis, ResponsiveContainer, Tooltip, Scatter, ScatterChart } from 'recharts';
import type { ResultData } from '../../services/text.worker';

const SIZE_LIMIT = 1000;

type Props = {
  results: ResultData | null,
}
export default function CharactersRankFrequency({results}: Props) {
  if (results === null) {
    return <></>;
  }

  const data = results.characterCount
    .slice(0, SIZE_LIMIT)
    .map((values, i) => {
      return {
        i, ...values,
      };
    });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid stroke="#888" strokeDasharray="3 6" />
        <XAxis style={{fill: '#fff'}} type="number" scale={'linear'} dataKey="i" name="Rank" />
        <YAxis style={{fill: '#fff'}} type="number" scale={'linear'} dataKey="frequency" name="Frequency" />
        <ZAxis type="category" dataKey="character" name="Character" />
        <Tooltip wrapperClassName="rounded-lg border-none bg-stone-800" itemStyle={{color: '#fff'}} />
        <Scatter data={data} fill="#6366F1" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
