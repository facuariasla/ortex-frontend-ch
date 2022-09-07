interface ChildrenType {
  children: React.ReactNode;
}

export default function Layout({ children }: ChildrenType) {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
