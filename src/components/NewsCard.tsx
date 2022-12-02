import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { INews } from "../types/news";

export const NewsCard = ({ data }: { data: INews }) => {
  console.log(data);
  return (
    <>
      <Card
        sx={{
          mb: 5,
          textDecoration: "none",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={data.bannerImage}
          alt={data.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component={Link}
            style={{
              textDecoration: "none",
            }}
            to={`/post/${data._id}`}
          >
            {data.title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 3 }}>
            {data.title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
