

interface ILayout {
  children: {
    header?: React.ReactChild
    body?: React.ReactChild
    footer?: React.ReactChild
  } 
}

function Layout({children }: ILayout) {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px]">
        {children.header}
        {children.body}
        {children.footer}
      </div>
    </div>
  );
}

export default Layout;
