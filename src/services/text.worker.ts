import getWordCount, { type WordCount } from "../utils/getWordCount";
import getCharacterCount, { type CharacterCount } from "../utils/getCharacterCount";
import type { TextServiceMessage } from "./text.service";

export type ResultData = {
  wordCount: WordCount,
  characterCount: CharacterCount,
}

export type TextWorkerMessage = {
  task: 'text.result',
  data: ResultData,
} | {
  task: 'text.error',
  data: null,
}

self.onmessage = async ({ data: { task, data } }: MessageEvent<TextServiceMessage>) => {
  if (task === 'text.request') {
    try {
      const wordCount = getWordCount(data);
      const characterCount = getCharacterCount(data);
      
      const msg: TextWorkerMessage = {
        task: 'text.result',
        data: {wordCount, characterCount},
      }
      
      // Labor illusion...
      setTimeout(() => {
        self.postMessage(msg);
      }, 500);

    } catch(err) {
      console.error(err);

      const msg: TextWorkerMessage = {
        task: 'text.error',
        data: null,
      }
      self.postMessage(msg);
    }
  }
}
  