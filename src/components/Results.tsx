import * as Tabs from '@radix-ui/react-tabs';

import ErrorScreen from './ErrorScreen';
import StyledTabTrigger from './tabs/StyledTabTrigger';
import StyledTabContent from './tabs/StyledTabContent';

import WordCount from './charts/WordCount';
import WordFrequency from './charts/WordFrequency';
import CharacterCount from './charts/CharacterCount';
import CharacterFrequency from './charts/CharacterFrequency';
import WordsRankFrequency from './charts/WordsRankFrequency';
import CharactersRankFrequency from './charts/CharactersRankFrequency';

import type { ResultData } from '../services/text.worker';

export type TabName = 'words.count' | 'words.frequency'
  | 'characters.count' | 'characters.frequency'
  | 'words.rank.frequency' | 'characters.rank.frequency';

type Props = {
  results: ResultData | null,
  loading: boolean,
  error: boolean,
}
export default function Results({results, loading, error}: Props) {
  if (error) {
    return (
      <ErrorScreen />
    );
  }

  return (
    <>
      <Tabs.Root defaultValue={'words.count' as TabName}>

        <Tabs.List className='p-1 rounded bg-stone-800 space-x-1'>
          <StyledTabTrigger value="words.count">Word count</StyledTabTrigger>
          <StyledTabTrigger value="words.frequency">Word frequency</StyledTabTrigger>
          <StyledTabTrigger value="characters.count">Character count</StyledTabTrigger>
          <StyledTabTrigger value="characters.frequency">Character frequency</StyledTabTrigger>
          <StyledTabTrigger value="words.rank.frequency">Word rank/frequency</StyledTabTrigger>
          <StyledTabTrigger value="characters.rank.frequency">Character rank/frequency</StyledTabTrigger>
        </Tabs.List>

        <StyledTabContent value="words.count" loading={loading}>
          <WordCount results={results} />
        </StyledTabContent>

        <StyledTabContent value="words.frequency" loading={loading}>
          <WordFrequency results={results} />
        </StyledTabContent>

        <StyledTabContent value="characters.count" loading={loading}>
          <CharacterCount results={results} />
        </StyledTabContent>

        <StyledTabContent value="characters.frequency" loading={loading}>
          <CharacterFrequency results={results} />
        </StyledTabContent>

        <StyledTabContent value="words.rank.frequency" loading={loading}>
          <WordsRankFrequency results={results} />
        </StyledTabContent>

        <StyledTabContent value="characters.rank.frequency" loading={loading}>
          <CharactersRankFrequency results={results} />
        </StyledTabContent>

      </Tabs.Root>
    </>
  );
}
