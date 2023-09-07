import { Box, Button, Typography } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const RightSideDashboard = ({ profileData }) => {
  return (
    <Box sx={{ bgcolor: "#fff", padding: "10px" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
        <Person2OutlinedIcon />
        <Typography variant="h6" sx={{ ml: "5px" }}>
          About
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Box sx={{ display: "flex", mb: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Name:</Typography>
            <Typography sx={{ ml: "20px" }}>{profileData.name}</Typography>
          </Box>
          <Box sx={{ display: "flex", mb: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Address:</Typography>
            <Typography sx={{ ml: "20px" }}>{profileData.address}</Typography>
          </Box>
        </Box>
        {/* righside  */}
        <Box>
          <Box sx={{ display: "flex", mb: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Contact no:</Typography>
            <Typography sx={{ ml: "20px" }}>{profileData.phone}</Typography>
          </Box>
          <Box sx={{ display: "flex", mb: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>College:</Typography>
            <Typography sx={{ ml: "20px" }}>{profileData.college}</Typography>
          </Box>
        </Box>
      </Box>
      <Button variant="outlined">Edit Profile</Button>
    </Box>
  );
};

export default RightSideDashboard;
