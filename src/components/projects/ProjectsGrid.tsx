import { useState } from "react";
import { Grid, Box, Tabs, Tab, useTheme, useMediaQuery } from "@mui/material";
import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types/project.types";
import TabPanel from "../common/TabPanel";

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
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              id={`projects-tab-${index}`}
              aria-controls={`projects-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab, index) => {
        const filteredProjects = projects.filter(tab.filter);

        return (
          <TabPanel key={index} value={tabValue} index={index} id="projects">
            <Grid container spacing={3}>
              {filteredProjects.map((project, idx) => (
                <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
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
