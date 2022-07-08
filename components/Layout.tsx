import Head from "next/head";

interface ILayout {
  children: {
    header?: React.ReactChild;
    body?: React.ReactChild;
    footer?: React.ReactChild;
  };
}

function Layout({ children }: ILayout) {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex justify-center">
        <div className="w-full">
          {children.header}
          {children.body}
          {children.footer}
        </div>
      </div>
    </div>
  );
}

export default Layout;
