"use-server";

export async function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center sm:items-start rounded-[0.5rem] border bg-background shadow w-full">
          <div
            className={`w-full items-start justify-center gap-10 rounded-lg p-8 flex flex-wrap flex-row flex-basis-0 grow-0 bg-bgp`}
          ></div>
        </main>
      </div>
    </>
  );
}
