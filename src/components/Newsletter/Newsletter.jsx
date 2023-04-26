import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <Box className="myFavouritePanel__box" sx={{ marginBottom: "20px" }}>
        <Typography className="myFavouritePanel__heading">Join Us</Typography>
      </Box>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          padding: "30px 10px",
          borderRadius: "10px",
          height: "200px",
          background: "linear-gradient(to left, #ffeeee, #ddefbb)",
        }}
        elevation={0}
      >
        <Box>
          <Typography variant="h5" fontWeight="600">
            Join our newsletter
          </Typography>
          <Typography variant="body2" fontWeight="400" color="grey">
            Get weekly access to our latest news
          </Typography>
          <Grid item xs={12}>
            <TextField
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              disableAnimation
              margin="normal"
              placeholder="Enter your email"
              size="small"
              InputLabelProps={{ shrink: false }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      sx={{
                        boxShadow: "none",
                        textTransform: "none",
                      }}
                    >
                      Subscribe
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default Newsletter;
