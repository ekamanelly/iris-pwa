import Layout from "../components/Layout";
import { Footer, Header, Logo, Nav } from "../components/navigation";
import search from "../assets/image/search.png";
import { navList } from "../constants";
import logoUrl from "../assets/image/logo.png";
import { Content } from "../components/homeContent/Content";
import { Input } from "../components/form";
import { Slider } from "../components/homeContent/Slider";
import { Features } from "../components/homeContent/Features";
import { FeaturesLeftSection } from "../components/homeContent/FeaturesLeftSection";
import Hero from "../components/homeContent/Hero";
import { FeaturesRightSection } from "../components/homeContent/FeaturesRightSection";
import { linkList, servicesList, slideList } from "../constants";

function Home(Props: any) {
  const handleOnchange = (e: any) => {
    console.log("Not implemented");
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
        body: (
          <Content>
            <Slider images={slideList} >
            <Logo imagesUrl={logoUrl} />
            </Slider>
            <Hero />
            <Features>
              <FeaturesLeftSection links={linkList} />
              <FeaturesRightSection services={servicesList} />
            </Features>
          </Content>
        ),
        footer: (
          <Footer>
            <Logo imagesUrl={logoUrl} />
          </Footer>
        ),
      }}
    </Layout>
  );
}

export default Home;
