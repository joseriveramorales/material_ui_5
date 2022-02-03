import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SimpleAccordion = () => 

<div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Will I get rich in the Casino?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I get married in 1 day to a stripper?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cupidatat adipisicing laboris labore enim reprehenderit excepteur ex labore commodo adipisicing officia sit. Eiusmod duis eu reprehenderit laborum ut aliquip ex culpa. Anim aliqua mollit ad enim occaecat ex. Cillum esse consectetur in cillum sit veniam qui consequat non eu ipsum ea. Reprehenderit eiusmod sit non anim esse ipsum enim consequat ex enim eiusmod pariatur amet exercitation. Excepteur in laborum labore amet. Tempor quis id proident dolore dolor.

Proident nostrud occaecat amet sit ad elit aliqua. Consequat proident deserunt incididunt laborum laborum labore proident reprehenderit ut velit dolor officia. Cillum est nisi ipsum commodo dolore. Proident laboris nostrud cillum eiusmod enim consectetur Lorem est officia voluptate cillum anim cillum pariatur. Minim ipsum officia sit laborum aliquip aliquip officia fugiat consectetur. Duis sit proident minim tempor cupidatat duis non ipsum ullamco nisi. Officia sunt eu incididunt magna ad ut ex est nisi.

Velit labore voluptate id enim veniam. Deserunt anim mollit officia adipisicing velit voluptate. Ad irure excepteur voluptate in eu adipisicing dolore et laborum do qui.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

    export default SimpleAccordion;
