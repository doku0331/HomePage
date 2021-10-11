import React from "react";
import {
  Box,
  Link,
  Card,
  CardContent,
  CardHeader,
  Container,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  media: { maxWidth: "100%", height: "auto" },
});
function WorkCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={item.title}
        subheader={
          <div>
            <Link href={item.link} variant="subtitle1" color="secondary">
              github連結
            </Link>
          </div>
        }
      />
      <Container>
        <CardMedia
          className={classes.media}
          component="img"
          image={item.img}
          alt="圖片"
        />
      </Container>

      <CardContent>
        <Typography variant="body1">使用技術: {item.tech}</Typography>
        <Typography variant="body1">{item.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default WorkCard;
