export default function ErrorScreen() {
  return (
    <div className="py-10 px-3 rounded bg-stone-800 text-center">
      <div className="text-indigo-500">
        <svg
          className="inline"
          height={48}
          width={48}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mt-6 text-2xl font-bold">Sorry, there’s been an error 😕</div>
      <div className="mt-2 mb-12 text-lg">Try reloading the page or maybe use a different browser.</div>

      <button
        className="px-6 py-3 min-w-[8rem] rounded-lg text-lg font-semibold bg-indigo-500 ring-2 ring-transparent ring-offset-2 ring-offset-stone-800 enabled:focus:ring-indigo-700 enabled:focus:bg-indigo-700 enabled:hover:bg-indigo-700 enabled:hover:scale-[1.03] transition-[transform,background-color] enabled:duration-500 enabled:hover:duration-100"
        type="button"
        onClick={() => window.location.reload()}
      >
          <span>Refresh</span>
        </button>
    </div>
  )
}