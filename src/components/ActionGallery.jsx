import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import transcendencephoto from "../../static/transcendence.png";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import teamphoto from "../../static/teamphoto.png";

const ActionGallery = () => {
  return (
    <div className="flex w-[80vw] mx-auto justify-evenly -z-10">
      <Card variant="outlined"  class="p-4 border border-slate-950 rounded-lg w-[20vw] -z-10">
      <CardActionArea>
          <CardMedia

            image={transcendencephoto}
            title="Transcendence"
            className="rounded-lg h-48"
          />
          <CardContent>
            <Typography component="div" class="mx-auto text-center rounded-lg">
              Transcendence
            </Typography>
            <Typography component="div" class="mx-auto text-center rounded-lg">
              Read the 2024 Yearbook
            </Typography>
          </CardContent>
          </CardActionArea>
      </Card>
      <Card variant="outlined"  class="p-4 border border-slate-950 rounded-lg w-[20vw] -z-10">
      <CardActionArea>
          <CardMedia
            image={teamphoto}
            title="Transcendence"
            className="rounded-lg h-48"
          />
          <CardContent>
            <Typography component="div" class="mx-auto text-center rounded-lg">
              The Editorial Board
            </Typography>
            <Typography component="div" class="mx-auto text-center rounded-lg">
              2024-2025
            </Typography>
          </CardContent>
          </CardActionArea>
      </Card>

    </div>
  );
};

export default ActionGallery;
