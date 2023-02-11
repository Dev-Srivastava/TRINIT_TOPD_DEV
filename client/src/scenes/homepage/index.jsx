import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import OverviewChart from "components/OverviewChart";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Typography sx={{ textAlign: 'center',fontWeight: 'bold' }} variant="h1" component="h2">
  Carbon Footprint
</Typography>
<Typography sx={{ textAlign: 'center',mt: "2rem" }} variant="h3" component="h4">
Yes, websites have a carbon footprint
</Typography>
<Typography sx={{mt: "1.5rem" }} variant="h5" component="h6">
The internet consumes a lot of electricity. 416.2TWh per year to be precise. To give you some perspective, that's more than the entire United Kingdom.
</Typography>
<Typography sx={{mt: "0.5rem" }} variant="h5" component="h6">
From data centres to transmission networks to the billions of connected devices that we hold in our hands, it is all consuming electricity, and in turn producing carbon emissions equal to or greater than the global aviation industry. Yikes!</Typography>
<Typography sx={{mt: "0.5rem" }} variant="h5" component="h6">
We developed the first methodology for calculating the carbon emissions attributed to a website and this free website carbon calculator is here to help raise awareness and inspire a more sustainable internet.</Typography>
<Typography sx={{mt: "0.5rem" }} variant="h5" component="h6">
If you want help doing a more detailed analysis or need assistance reducing emissions from your web project, our team would be happy to discuss your requirements.</Typography>

<img  style={{width: 450, height: 300, position: 'absolute',marginLeft: '25rem',marginTop:'1rem',borderRadius:'100%'}}  src="https://images.unsplash.com/photo-1600340052163-7fc779524508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcmJvbiUyMGZvb3RwcmludHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60" alt="Carbon-Footprint "/>

    </Box>
  );
};

export default Dashboard;
