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

type SkillCategory = "all" | "frontend" | "backend" | "tools" | "other";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`skills-tabpanel-${index}`}
      aria-labelledby={`skills-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

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
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons={isMobile ? "auto" : undefined}
          allowScrollButtonsMobile
          centered={!isMobile}
          TabIndicatorProps={{
            style: {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          {categories.map((category, index) => (
            <Tab
              key={category.value}
              label={category.label}
              id={`skills-tab-${index}`}
              aria-controls={`skills-tabpanel-${index}`}
              sx={{
                fontWeight: 600,
                textTransform: "none",
                minWidth: isMobile ? "auto" : 120,
              }}
            />
          ))}
        </Tabs>
      </Box>

      {categories.map((category, index) => {
        const filteredSkills = filterSkills(category.value);

        return (
          <TabPanel key={category.value} value={tabValue} index={index}>
            {filteredSkills.length > 0 ? (
              <Grid container spacing={3}>
                {filteredSkills.map((skill, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={skill.id}>
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
