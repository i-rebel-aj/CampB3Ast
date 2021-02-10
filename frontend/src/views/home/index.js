import { Jumbotron, Button, Image, Row, Col } from "react-bootstrap";
import CustomCard from "../../components/home";
import image from "../../assets/images/home-page.jpg";
import image2 from "../../assets/images/Campus-B34st.png";

const Home = () => {
  console.log(image);
  return (
    <>
      <Jumbotron
        style={{
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Image
          src={image}
          style={{ height: 400, width: 600, marginRight: 50 }}
        />
        <Image src={image2} style={{ marginRight: 50 }} />
        {"Make your own community or join one!"}
        <Button
          variant="primary"
          style={{ alignSelf: "flex-end", marginLeft: 30 }}
        >
          Let's go!
        </Button>
      </Jumbotron>
      <Row style={{ marginLeft: 100 }}>
        <Col>
          <CustomCard
            title={"Login"}
            text={"Login to access all the features"}
            goto={"/login"}
          />
        </Col>
        <Col>
          <CustomCard
            title={"Profile"}
            text={"Check your profile"}
            goto={"/profile"}
          />
        </Col>
        <Col>
          <CustomCard title={"Chat"} text={"Coming Soon"} goto={"/"} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
