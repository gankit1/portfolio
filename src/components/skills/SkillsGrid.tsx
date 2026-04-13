import { useState } from "react";
import {
  Grid,
  Box,
  Tabs,
  Tab,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { skills } from "../../data/skillsData";
import SkillCard from "./SkillCard";
import TabPanel from "../common/TabPanel";

type SkillCategory = "all" | "frontend" | "backend" | "tools" | "other";

const SkillsGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const categories: { label: string; value: SkillCategory }[] = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Tools", value: "tools" },
    { label: "Other", value: "other" },
  ];

  const filterSkills = (category: SkillCategory) => {
    if (category === "all") {
      return skills;
    }
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <Box>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: isMobile ? "flex-start" : "center",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons={isMobile ? "auto" : undefined}
          allowScrollButtonsMobile
          sx={{
            "& .MuiTab-root": {
              fontWeight: 600,
              textTransform: "none",
              minWidth: isMobile ? "auto" : 100,
              fontSize: "0.9rem",
              borderRadius: "10px",
              mx: 0.5,
              py: 1,
              transition: "all 0.2s",
              color: theme.palette.text.secondary,
              "&.Mui-selected": {
                color: "#297BB4",
                backgroundColor: "rgba(41, 123, 180, 0.08)",
              },
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {categories.map((category, index) => (
            <Tab
              key={category.value}
              label={category.label}
              id={`skills-tab-${index}`}
              aria-controls={`skills-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </Box>

      {categories.map((category, index) => {
        const filteredSkills = filterSkills(category.value);

        return (
          <TabPanel key={category.value} value={tabValue} index={index} id="skills">
            {filteredSkills.length > 0 ? (
              <Grid container spacing={3}>
                {filteredSkills.map((skill, idx) => (
                  <Grid key={skill.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <SkillCard skill={skill} index={idx} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  No skills in this category yet.
                </Typography>
              </Box>
            )}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default SkillsGrid;
