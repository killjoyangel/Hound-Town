import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <Container className="home" mt="20vh" p="40px">
        <Typography fs="64px" fw="700" ta="center" w="100%">
          Pawsitively.The.Best.
        </Typography>
        <Typography fs="32px" fw="600" ta="center" w="100%" style= {{padding:"2rem",blur:"60%",backgroundColor:"black"}} >
          Some days are simply meant for playing. 
        </Typography>
      </Container>
    );
  }
}

export default Home;

function Typography(props) {
  return (
    <span
      style={{
        display: props.d,
        fontSize: props.fs,
        color: props.c,
        textAlign: props.ta,
        width: props.w,
        fontWeight: props.fw,
        padding: props.p,
      }}
    >
      {props.children}
    </span>
  );
}

Typography.defaultProps = {
  d: "inline-block",
  fs: "16px",
  c: "white",
  ta: "left",
  w: "inherit",
  fw: "400",
  p: "0px",
};

function Container(props) {
  return (
    <div
      style={{
        display: props.d,
        fontSize: props.fs,
        color: props.c,
        textAlign: props.ta,
        width: props.w,
        margin: "0 auto",
        maxWidth: "80%",
        backgroundColor: props.bgc,
        flexWrap: props.fw,
        marginTop: props.mt,
        padding: props.p,
      }}
    >
      {props.children}
    </div>
  );
}

Container.defaultProps = {
  p: "0px",
  mt: "0px",
  bgc: "inherit",
  d: "flex",
  fw: "wrap",
  c: "white",
  fs: "16px",
  ta: "left",
  w: "inherit",
};
