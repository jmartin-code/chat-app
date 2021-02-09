import { useState } from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Icon,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(20),
    textAlign: "center",
  },
  title: {
    padding: theme.spacing(3),
  },
  form: {
    padding: theme.spacing(1),
  },
}));

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");

    const Auth = {
      "Project-ID": process.env.REACT_APP_PROJECT_ID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", { headers: Auth });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (err) {
      seterror("Incorrect credentials, try again!");
    }
  };

  return (
    <Container className={classes.container}>
      <div className={classes.title}>
        <Typography variant="h2">ONLINE</Typography>
        <Typography variant="h2">CHAT</Typography>
        <Typography variant="h2">APPLICATION</Typography>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <Grid xs container direction="column">
            <TextField
              className={classes.form}
              variant="outlined"
              label="Username"
              type="text"
              required
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <TextField
              className={classes.form}
              variant="outlined"
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <Button
              className={classes.form}
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
              type="submit"
            >
              START THE CHAT
            </Button>
            <Typography variant="h6">{error}</Typography>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
