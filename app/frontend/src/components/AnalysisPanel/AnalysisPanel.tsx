import { Pivot, PivotItem } from "@fluentui/react";
import DOMPurify from "dompurify";

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';


import styles from "./AnalysisPanel.module.css";

import { SupportingContent } from "../SupportingContent";
import { ChatAppResponse } from "../../api";
import { AnalysisPanelTabs } from "./AnalysisPanelTabs";

interface Props {
    className: string;
    activeTab: AnalysisPanelTabs;
    onActiveTabChanged: (tab: AnalysisPanelTabs) => void;
    activeCitation: string | undefined;
    citationHeight: string;
    answer: ChatAppResponse;
}


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  whiteSpace: "pre-line",
};

const pivotItemDisabledStyle = { disabled: true, style: { color: "grey" } };

export const AnalysisPanel = ({ answer, activeTab, activeCitation, citationHeight, className, onActiveTabChanged }: Props) => {
    const isDisabledCitationTab: boolean = !activeCitation;
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);

    const sanitizedThoughts = DOMPurify.sanitize(answer.choices[0].context.thoughts!);

    return (

            <div> 
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            
              >

              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center'}}>
                  Hier finden Sie die zugehörige Seitenquelle, die wbdGPT verwendet hat.
                
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center'}}>
                </Typography>
                <iframe title="Quelle" src={activeCitation} width="100%" height="100%" />
              </Box>
            </Modal>          
</div>

    );
};


