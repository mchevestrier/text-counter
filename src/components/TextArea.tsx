import { useRef } from "react";
import Loading from "./Loading";

const LOREM_IPSUM =
`Ipsa ad ducimus et hic molestias quo nesciunt aut. Veniam quia facere eum molestiae dolores consequatur. Tempore rerum aperiam voluptas molestiae pariatur. Similique maxime quis consequatur nisi et. Facilis debitis sed aut impedit voluptas quas accusamus modi. Necessitatibus eveniet quaerat doloremque.

Quod culpa eius quaerat tenetur voluptas aut. In omnis consequatur in molestias eligendi dignissimos. Ipsam hic voluptatem quis necessitatibus unde vitae. Aut numquam natus doloribus porro. Ut sint illum animi ab aut debitis consequatur optio. Et minus quidem aut veritatis nihil accusantium in ducimus.

Omnis sequi ipsam repellendus. Et consequatur pariatur sed placeat nam. Quaerat in distinctio dolorum molestiae.

Ipsam aut dolor sit sunt numquam vel. Nulla tenetur maiores reiciendis repellat aut. Rem modi et inventore vel dolor. Quia voluptas quas molestiae. Est et dolorum qui illo porro.

Odio reiciendis esse consequuntur fugiat quidem labore quae. Aut nostrum sequi quia et maiores voluptatem voluptatibus maiores. Sapiente quo cum ullam non illo ut architecto. Quod maxime similique dicta eligendi ut sunt. Voluptatibus vitae nulla sequi exercitationem exercitationem enim et. Dignissimos id qui dolorum doloribus repellendus dolorum nam ex.
`;

type Props = {
  onSubmit: (value: string) => void,
  loading: boolean,
}
export default function TextArea({onSubmit, loading}: Props) {
  const textarea = useRef<HTMLTextAreaElement>(null);
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        const value = data.get('text');
        if (value === null) {
          throw Error('FormData.text is null');
        }
        onSubmit(value as string);
      }}
    >
      <textarea 
        className="w-full h-96 rounded-lg bg-stone-800 py-4 px-3 text-lg"
        ref={textarea}
        name="text"
        placeholder="Write some text..."
      ></textarea>

      <div className="text-right space-x-4">
        <button
          className="px-6 py-3 min-w-[8rem] rounded-lg text-lg font-semibold bg-stone-800 ring-2 ring-transparent ring-offset-2 ring-offset-stone-900 enabled:focus:ring-stone-700 enabled:focus:bg-stone-700 enabled:hover:bg-stone-700 enabled:hover:scale-[1.03] transition-[transform,background-color] enabled:duration-500 enabled:hover:duration-100"
          disabled={loading}
          type="button"
          onClick={() => {
            if (textarea.current !== null) {
              textarea.current.value = LOREM_IPSUM;
            }
            onSubmit(LOREM_IPSUM);
          }}
        >
          <span>Lorem Ipsum</span>
        </button>

        <button
          className="px-6 py-3 min-w-[8rem] rounded-lg text-lg font-semibold bg-indigo-500 ring-2 ring-transparent ring-offset-2 ring-offset-stone-900 enabled:focus:ring-indigo-700 enabled:focus:bg-indigo-700 enabled:hover:bg-indigo-700 enabled:hover:scale-[1.03] transition-[transform,background-color] enabled:duration-500 enabled:hover:duration-100"
          disabled={loading}
          type="submit"
        >
          {
            loading
            ? <Loading />
            : <span>Analyze</span>
          }
        </button>
      </div>
    </form>
  );
}
