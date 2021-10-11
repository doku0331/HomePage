import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import { DeleteOutline } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles({
  avatar: {
    background: (note) => {
      if (note.category == "work") {
        return yellow[700];
      }
      if (note.category == "reminders") {
        return green[700];
      }
      if (note.category == "todos") {
        return pink[700];
      }
      return blue[500];
    },
  },
});

function NoteCard({ note, handleDelete }) {
  const classes = useStyle(note);

  return (
    <div>
      <Card elevation={5}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;
