

interface ILayout {
  children: {
    header?: React.ReactChild
    body?: React.ReactChild
    footer?: React.ReactChild
  } 
}

function Layout({children }: ILayout) {
  return (
    <div>
      <div>
        {children.header}
        {children.body}
        {children.footer}
      </div>
    </div>
  );
}

export default Layout;
