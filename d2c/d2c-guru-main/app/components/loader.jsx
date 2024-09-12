export default function Loader(props) {
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <div
          {...props}
          className="border-8 border-t-blue-400 rounded-full h-20 w-20 animate-spin"
        ></div>
        <span className="animate-pulse text-2xl">Loading...</span>
      </div>
    </>
  );
}
