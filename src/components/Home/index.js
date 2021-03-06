import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link, Route } from "react-router-dom";

import {
  ImageButton,
  ImageSrc,
  Image,
  ImageBackdrop,
  ImageMarked,
} from "./styles.js";
import "./styles.css";

const People = React.lazy(() => import("../People/index.js"));
const Planets = React.lazy(() => import("../Planet/index"));
const Movies = React.lazy(() => import("../Movies/index"));

const images = [
  {
    url: "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg&ga=GA1.1.1511326481.1643587200",
    title: "People",
    width: "100%",
    linkTo: "/people",
  },
  {
    url: "https://exoplanets.nasa.gov/internal_resources/1806/",
    title: "Planets",
    width: "100%",
    linkTo: "/planets",
  },
  {
    url: "https://parade.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-22-at-12.49.08-PM.png",
    title: "Movies",
    width: "100%",
    linkTo: "/movies",
  },
];

const Home = () => (
  <div className="button-container">
    <Grid container spacing={1}>
      {images.map((image) => (
        <Grid item xs={12} md={12 / images.length}>
          <Link to={image.linkTo}>
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          </Link>
        </Grid>
      ))}
    </Grid>
    <div className="routing-container">
      <Route path={`/people`}>
        <React.Suspense
          fallback={
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              style={{ color: "#fff" }}
            >
              Loading ....
            </Typography>
          }
        >
          <People />
        </React.Suspense>
      </Route>

      <Route path={`/planets`}>
        <React.Suspense
          fallback={
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              style={{ color: "#fff" }}
            >
              Loading ....
            </Typography>
          }
        >
          <Planets />
        </React.Suspense>
      </Route>

      <Route path={`/movies`}>
        <React.Suspense
          fallback={
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              style={{ color: "#fff" }}
            >
              Loading ....
            </Typography>
          }
        >
          <Movies />
        </React.Suspense>
      </Route>
    </div>
  </div>
);

export default Home;
