import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { AccessTime } from "@mui/icons-material";
import Rating from '@mui/material/Rating';

const TourCard = ({tour}) => {
    return <Grid item xs={4}>
            <Paper elevation={4}> 
                <img src ={tour.image} className="img" />

                <Box paddingX={1}>
                    <Typography  variant="subtitle1" component = "h2">
                        {tour.name}
                    </Typography>

                    <Box  sx={{ display: "flex", alignItems:"center", }}>   
                        <AccessTime sx={{width: 18}}></AccessTime>
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            {tour.duration} hours
                        </Typography>
                    </Box>
                    <Box sx={{ display:"flex", alignItems:'center', marginY: 1}}>
                        <Rating name="read-only" value={tour.rating} readOnly precision={0.5}> </Rating>
                        <Typography marginLeft={0.5}> {tour.rating} </Typography>
                        <Typography variant='subtitle2' marginLeft={0.5}> ({tour.numberOfReviews} Reviews) </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" component="h3">
                            From C ${tour.price}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
    </Grid>

};
     
export default TourCard;