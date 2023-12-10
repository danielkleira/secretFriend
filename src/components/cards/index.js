import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import perfilBall from "../../utils/perfilBall.png";
import backpng from "../../utils/back.jpg";
import imageLefts from "../../utils/heart.png";
import boots from "../../utils/boots.png";
import { LiaTshirtSolid } from "react-icons/lia";
import { PiPantsLight } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { AiOutlineAmazon } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import "../../index.css";

const avatarStyle = {
  perfilBallAvatar: {
    display: "inline-flex",
    position: "relative",
    width: "50vw",
    height: "50vw",
    backgroundImage: `url(${perfilBall})`,
    backgroundSize: "cover",
  },
  profileImage: {
    position: "relative",
    top: "46%",
    left: "46%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90%",
    borderRadius: "50%",
    backgroundSize: "cover",
  },
};

const cardStyle = {
  background: {
    backgroundImage: `url(${backpng})`,
    backgroundSize: "cover",
    opacity: "90%",
  },
  redStripe: {
    width: "100%",
    backgroundColor: "red",
  },
};

export default function FamilyCard({
  profileImage,
  nome,
  like,
  dontLike,
  shirt,
  pants,
  shoes,
  linkImg,
  link,
  textLines,
}) {
  return (
    <Card
      sx={{
        width: "90%",
        height: "auto",
        boxShadow: "lg",
        borderRadius: "40px",
        ...cardStyle.background,
        marginBottom: "10%",
      }}
    >
      <CardContent
        sx={{
          alignItems: "center",
          textAlign: "center",
          padding: 0,
          height: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={boots} alt="Left" style={{ width: "30%", height: "20%" }} />
        </Box>
        <div style={avatarStyle.perfilBallAvatar}>
          <Avatar src={profileImage} style={avatarStyle.profileImage} />
        </div>
        <Typography
          variant="h2"
          sx={{ color: "#AD1F1A" }}
          style={{ fontFamily: "bubble" }}
        >
          {nome}
        </Typography>
        <br />
        <Typography
          variant="body1"
          sx={{
            fontSize: "28px",
          }}
        >
          gostaria de ganhar
        </Typography>
        <Box
          sx={{
            backgroundColor: "center",
            padding: "1%",
            borderRadius: "4px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "-webkit-center",
          }}
        >
          {like &&
            like.length > 0 &&
            like.map((text, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  width: "75%",
                  background: "#EACDAB",
                  opacity: "100%",
                  color: "#000",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  marginBottom: "2%",
                  padding: "2%",
                }}
              >
                {text}
              </Typography>
            ))}
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: "28px",
          }}
        >
          odiaria ganhar
        </Typography>
        <Box
          sx={{
            backgroundColor: "center",
            padding: "1%",
            borderRadius: "4px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "-webkit-center",
          }}
        >
          {dontLike &&
            dontLike.length > 0 &&
            dontLike.map((text, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  width: "75%",
                  background: "#EACDAB",
                  opacity: "100%",
                  color: "#000",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  marginBottom: "2%",
                  padding: "2%",
                }}
              >
                {text}
              </Typography>
            ))}
        </Box>
        <Box
          sx={{
            background: "#CC1417",
            width: "100%",
            height: "20vw",
            marginTop: "4%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "-webkit-center",
            placeContent: "center",
            color: "#FEEFD3",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "27px",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                width: "100%",
                height: "100%",
                display: "flex",
                flexWrap: "nowrap",
                flexDirection: "row",
                justifyContent: "space-around",
                fontSize: "27px",
              }}
            >
              <div>
                <LiaTshirtSolid />:{" "}
                <span style={{ fontSize: "21px" }}>{shirt}</span>
              </div>
              <div>
                <PiPantsLight /> :
                <span style={{ fontSize: "21px" }}> {pants} </span>
              </div>
              <div>
                <GiConverseShoe />:
                <span style={{ fontSize: "21px" }}> {shoes} </span>
              </div>
            </Box>

            {link && link.length > 0 && (
              <>
                <div style={{ backgroundColor: "#FEEFD3", width: "1px" }}></div>
                <a
                  href={link}
                  style={{
                    alignSelf: "center",
                    width: "20%",
                    display: "block",
                  }}
                >
                  {linkImg === "amz" ? (
                    <AiOutlineAmazon style={{ color: "#FEEFD3" }} />
                  ) : linkImg === "pin" ? (
                    <ImPinterest2 style={{ color: "#FEEFD3" }} />
                  ) : null}
                </a>
              </>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={imageLefts}
            alt="Left"
            style={{
              width: "15%",
              marginLeft: "10%",
              marginTop: "2%",
            }}
          />
          <div
            style={{
              textAlign: "justify",
              marginLeft: "4%",
              marginTop: "5%",
              paddingRight: "8%",
            }}
          >
            {textLines &&
              textLines.length > 0 &&
              textLines.map((text, index) => (
                <Typography
                  sx={{ fontFamily: "sans-serif" }}
                  key={index}
                  variant="body2"
                >
                  {text}
                </Typography>
              ))}
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
