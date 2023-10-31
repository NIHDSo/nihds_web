import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionList(props) {
    return (
        <div style={{marginBottom: "20px"}}>
            <Accordion sx={{ backgroundColor: "#fefefe" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ color: "#000" }}>{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: "#000" }}>
                        {props.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AccordionList