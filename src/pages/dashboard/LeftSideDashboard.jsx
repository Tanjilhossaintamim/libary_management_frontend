import { Box, Divider, Typography } from "@mui/material";
import Person3TwoToneIcon from "@mui/icons-material/Person3TwoTone";

const LeftSideDashboard = ({ profileName }) => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        padding: "10px",
        borderTop: "4px solid black",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {profileName}
          </Typography>
        </Box>
        <Box>
          <Person3TwoToneIcon sx={{ fontSize: "30px" }} />
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 0",
          bgcolor: "#F3F4F6",
          padding: "10px 4px",
        }}
      >
        <Typography>Status</Typography>
        <Box
          sx={{
            bgcolor: "#22C55E",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "3px",
            borderRadius: "4px",
          }}
        >
          <Typography>Active</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSideDashboard;
