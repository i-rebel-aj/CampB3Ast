import { Jumbotron, Button, Image, Row, Col, Carousel } from "react-bootstrap";
import CustomCard from "../../components/home";
import image from "../../assets/images/home-page.jpg";
import imageA from "../../assets/images/1-connectivity.png";
import imageB from "../../assets/images/2-bulb-idea.jpg";
import imageC from "../../assets/images/3-innovation.jpg";
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
          height: window.innerHeight * 0.6,
          backgroundColor: "#00C5CA",
        }}
      >
        <Carousel>
          <Carousel.Item
            interval={1000}
            style={{
              height: window.innerHeight * 0.5,
            }}
          >
            <img
              style={{
                height: window.innerHeight * 0.5,
                marginLeft: window.innerHeight * 0.6,
                marginRight: window.innerHeight * 0.5,
              }}
              src={imageA}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>FORUMS</h3>
              <p>
                Make a forum and talk about whatevery you like to talk about.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={500}
            style={{
              height: window.innerHeight * 0.5,
            }}
          >
            <img
              style={{
                height: window.innerHeight * 0.5,
                marginLeft: window.innerHeight * 0.6,
                marginRight: window.innerHeight * 0.5,
              }}
              src={imageB}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Groups</h3>
              <p>An easy and interactive way to connect with your groups.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{
              height: window.innerHeight * 0.5,
            }}
          >
            <img
              style={{
                height: window.innerHeight * 0.5,
                marginLeft: window.innerHeight * 0.62,
                marginRight: window.innerHeight * 0.5,
              }}
              src={imageC}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Chat</h3>
              <p>Your personal space!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
      <Row
        style={{
          marginLeft: 100,
          height: window.innerHeight * 0.4,
        }}
      >
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
