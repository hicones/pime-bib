export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-64 md:pt-52 pt-32 divide-y p-4">
      <div className="max-w-screen-2xl w-full h-auto mx-auto flex justify-between lg:flex-row flex-col gap-8">
        <div className="max-w-screen-sm w-full flex flex-col justify-between gap-4 pb-12">
          <div className="w-full flex flex-col gap-8">
            <hr className="w-full h-12 animate-pulse bg-gray-400 rounded-lg backdrop-blur-sm" />
            <ul className="flex gap-4 flex-wrap">
              <li>
                <hr className="w-20 rounded-full h-12 animate-pulse bg-gray-400" />
              </li>
              <li>
                <hr className="w-20 rounded-full h-12 animate-pulse bg-gray-400" />
              </li>
              <li>
                <hr className="w-20 rounded-full h-12 animate-pulse bg-gray-400" />
              </li>
            </ul>
          </div>
          <hr className="bg-gray-400 animate-pulse rounded-lg w-full h-40" />
        </div>
        <hr className="lg:w-3/6 md:w-4/5 w-[85dvw] h-[80dvh] animate-pulse rounded-lg bg-gray-400" />
      </div>
    </main>
  );
}
