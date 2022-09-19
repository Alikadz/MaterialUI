import { Box } from "@mui/system";
import React from "react";

const SideBar = () =>{
    return(
        <Box bgcolor="green" flex={1} p={2} sx={{
            display:{xs:"none", sm:"block"}
        }}>
            SideBar
        </Box>
    )
}

export default SideBar;