export default function Layout({ children }: any) {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full flex flex-col justify-center">
        {children as any}
      </div>
    </div>
  );
}
