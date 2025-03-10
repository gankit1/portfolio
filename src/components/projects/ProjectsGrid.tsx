import { useState } from "react";
import { Grid, Box, Tabs, Tab, useTheme, useMediaQuery } from "@mui/material";
import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types/project.types";

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
      id={`projects-tabpanel-${index}`}
      aria-labelledby={`projects-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const ProjectsGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const tabs = [
    { label: "All", filter: () => true },
    { label: "Featured", filter: (project: Project) => project.featured },
    {
      label: "React",
      filter: (project: Project) => project.technologies.includes("React"),
    },
    {
      label: "TypeScript",
      filter: (project: Project) => project.technologies.includes("TypeScript"),
    },
  ];

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
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              id={`projects-tab-${index}`}
              aria-controls={`projects-tabpanel-${index}`}
              sx={{
                fontWeight: 600,
                textTransform: "none",
                minWidth: isMobile ? "auto" : 120,
              }}
            />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab, index) => {
        const filteredProjects = projects.filter(tab.filter);

        return (
          <TabPanel key={index} value={tabValue} index={index}>
            <Grid container spacing={3}>
              {filteredProjects.map((project, idx) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <ProjectCard project={project} index={idx} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default ProjectsGrid;
