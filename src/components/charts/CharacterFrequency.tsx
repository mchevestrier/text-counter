import { BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Bar, Tooltip } from 'recharts';
import type { ResultData } from '../../services/text.worker';

const SIZE_LIMIT = 50;

type Props = {
  results: ResultData | null,
}
export default function CharacterFrequency({results}: Props) {
  if (results === null) {
    return <></>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={results.characterCount.slice(0, SIZE_LIMIT)}>
        <CartesianGrid stroke="#888" strokeDasharray="3 6" />
        <XAxis dataKey="character" style={{fill: '#fff'}} />
        <YAxis style={{fill: '#fff'}} />
        <Tooltip cursor={false} wrapperClassName="rounded-lg border-none bg-stone-800" />
        <Bar dataKey="frequency" name="Frequency" fill="#6366F1" />
      </BarChart>
    </ResponsiveContainer>
  );
}
