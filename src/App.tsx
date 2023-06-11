import { useState } from "react";

import TextArea from "./components/TextArea";
import Results from "./components/Results";

import useService from "./utils/useService";
import wordService from "./services/text.service";

export default function App() {
  const [text, setText] = useState('');

  const {data, loading, error} = useService(wordService, [text]); 
  
  return (
    <div className="bg-stone-900 text-white min-h-screen">
      <div className="p-6">
        <h1 className="pt-6 text-5xl font-black">Text counter</h1>
        
        <div className="py-12">
          <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
            <TextArea onSubmit={(value) => setText(value)} loading={loading} />
            <Results results={data} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </div>
  )
}
