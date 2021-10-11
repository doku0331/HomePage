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
import React from "react";
import WorkCard from "../components/WorkCard";
import { WorkData } from "../utils/WorkData";
function Work() {
  return (
    <Container>
      <CardHeader title="關於我的作品們" subheader="最後更新時間2021/10/6" />
      <Grid container spacing={3}>
        {WorkData.map((item) => (
          <Grid key={item.id} item xs={12} md={6} lg={4}>
            <WorkCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Work;
