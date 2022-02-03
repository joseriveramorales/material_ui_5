import Typography  from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box  from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import SimpleAccordion from "../components/SimpleAccordion";
import  Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";

const Tour = () => 
    <Container sx={{width:1000}}>
        <Typography variant="h2" component={"h1"} marginTop={3} > 
            Explore the World
        </Typography>
        <Box marginTop={3} sx={{display:"flex"}}>
            <img src="https://s.hdnux.com/photos/01/20/20/54/21039902/3/1200x0.jpg" height={450} width={600}></img>
            <ImageCollage/>
        </Box>
        <Box>
            <Typography variant="h4" component="h4" marginTop={3}>
                About this ticket 
            </Typography>
            <Typography variant="paragraph" component="h4" marginTop={3}>
                Reprehenderit consectetur eu in ipsum quis anim culpa ad exercitation laborum excepteur proident. Do pariatur excepteur nisi amet officia nostrud. Et labore non duis enim. Sunt officia consequat ut voluptate ex deserunt fugiat minim sit cillum pariatur minim excepteur. Ad consequat magna est excepteur adipisicing in non labore magna irure qui.
            </Typography>
        </Box>
        <Box marginBottom={15}>
            <Typography variant="h4" component="h4" marginTop={3} marginBottom={2}>
                Frequently Asked Questions
            </Typography>
            <SimpleAccordion marginBottom={3}/>
        </Box>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
            <BasicModal/>
            </BottomNavigation>
        </Paper>
    </Container>

export default Tour;