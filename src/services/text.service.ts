import type { ResultData, TextWorkerMessage } from "./text.worker";

const worker = new Worker(new URL('./text.worker', import.meta.url), { type: 'module' });

export type TextServiceMessage = {
  task: 'text.request',
  data: string,
}

export default async function wordCount(text: string): Promise<ResultData> {
  const msg: TextServiceMessage = {
    task: 'text.request',
    data: text,
  };
  worker.postMessage(msg);
  return new Promise((resolve, reject) => {
    worker.onmessage = ({data: {task, data}}: MessageEvent<TextWorkerMessage>) => {
      if (task === 'text.result' && data !== null) {
        resolve(data);
      } else {
        reject();
      }
    };
  });
}
