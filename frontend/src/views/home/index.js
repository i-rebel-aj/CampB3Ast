import { Jumbotron, Button, Image } from "react-bootstrap";
import image from "../../assets/images/home-page.jpg";
import image2 from "../../assets/images/Campus-B34st.png";

const Home = () => {
  console.log(image);
  return (
    <Jumbotron
      style={{
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Image src={image} style={{ height: 400, width: 600 }} />
      <Image src={image2} />
      {"Make your own community or join one!"}
      <Button variant="primary" style={{ alignSelf: "flex-end" }}>
        Let's go!
      </Button>
    </Jumbotron>
  );
};

export default Home;
