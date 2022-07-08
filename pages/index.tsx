import Layout from "../components/Layout";
import { Footer, Header, Logo, Nav } from "../components/navigation";
import search from "../assets/image/search.png";
import { navList } from "../constants/nav";
import logoUrl from "../assets/image/logo.png";
import { Content } from "../components/homeContent/Content";
import { Input } from "../components/form";

function PlayGround(Props: any) {
  const handleOnchange = (e: any) => {
    console.log(e.target.vale);
  };
  return (
    <Layout>
      {{
        header: (
          <Header>
            <Logo imagesUrl={logoUrl} />
            <Input onChange={handleOnchange} leadingImageUrl={search} />
            <Nav items={navList} />
          </Header>
        ),
        body: <Content />,
        footer: (
          <Footer>
            <Logo imagesUrl={logoUrl} />
          </Footer>
        ),
      }}
    </Layout>
  );
}

export default PlayGround;
