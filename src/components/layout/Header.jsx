import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IMAGES } from "../../assets";
import Button from "../shared/Button";
import NavLink from "./NavLink";
import { useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";

const items = [
  {
    label: "Services",
    subItems: [
      { label: "Outsourcing", path: "/outsourcing" },
      { label: "Custom AI", path: "/custom-ai" },
    ],
  },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
];

export default function Header({ visible }) {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: { lg: 0, md: 8, xs: 0 },
        mx: "auto",
        width: { md: "95%", xs: "90%" },
        borderRadius: 10,
        // backgroundColor: { md: "transparent", xs: "#D0DFE2" },
        backgroundColor: "transparent",
        mt: { md: 0, xs: 0 },
        minHeight: {
          lg: 177.55,
          xs: "auto",
        },
      }}
    >
      <Toolbar
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: { md: "space-between", xs: "center" },
        }}
      >
        <div className="lg:hidden absolute top-9.5 bg-[#2F80C9] rounded-full p-1 right-4">
          <img
            src={IMAGES.menu} // replace with your logo path
            alt="HIRUNDO Logo"
            width={20}
            height={20}
            fetchpriority="high"
            loading="lazy"
            className="lg:hidden block"
          />
        </div>
        {/* Left: Logo + Text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            cursor: "pointer",
          }}
          className="lg:h-[177.55px] h-auto lg:w-62.5 w-auto"
          onClick={() => navigate("/")}
        >
          <Fade in={visible} timeout={500}>
            <img
              src={IMAGES.logotype}
              alt="HIRUNDO Logo"
              width={250}
              height={95}
              fetchpriority="high"
              loading="lazy"
              className="lg:block hidden"
            />
          </Fade>
          <img
            src={IMAGES.logotype}
            alt="HIRUNDO Logo"
            width={145}
            height={40}
            fetchpriority="high"
            loading="lazy"
            className="lg:hidden block"
          />
        </Box>

        {/* Center: Navigation Links */}
        <Box
          sx={{
            gap: 10,
            background: "#D0DFE2",
            paddingX: 6,
            paddingY: 2,
            borderRadius: 8,
            boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.15)",
          }}
          className="lg:flex hidden  justify-between items-center"
        >
          {items.map((link, index) => (
            <NavLink key={index} link={link} />
          ))}
        </Box>

        <Button
          className="lg:block hidden w-35.5!"
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}
