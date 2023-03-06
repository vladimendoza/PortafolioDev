import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Aboutme from '@/components/Aboutme';
import Servicios from '@/components/Servicios';
import Contactame from '@/components/Contactame';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pr: 5, pl: 5, pt: 3, pb: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabSet() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 600 }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
          <Tab label="Sobre mí" {...a11yProps(0)} style={{ textTransform: 'capitalize', fontSize: 16 }} />
          <Tab label="Servicios" {...a11yProps(1)} style={{ textTransform: 'capitalize', fontSize: 16 }} />
          <Tab label="Contáctame" {...a11yProps(2)} style={{ textTransform: 'capitalize', fontSize: 16 }} />
        </Tabs>
      </Box>

      <Box sx={{overflow: 'scroll'}}>
        <TabPanel value={value} index={0}>
          <Aboutme />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Servicios />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Contactame />
        </TabPanel>
      </Box>


      <Box>
        <Box style={{
          width: '-webkit-fill-available',
          height: 35,
          display: 'flex',
          alignItems: 'center',
          background: 'white',
          position: 'fixed',
          bottom: 0,
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)'
        }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
            <LinkedInIcon style={{ color: '#A6A6A6' }} />
            <InstagramIcon style={{ color: '#A6A6A6' }} />
            <TwitterIcon style={{ color: '#A6A6A6' }} />
            <FacebookIcon style={{ color: '#A6A6A6' }} />
            <YouTubeIcon style={{ color: '#A6A6A6' }} />
            <PinterestIcon style={{ color: '#A6A6A6' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}