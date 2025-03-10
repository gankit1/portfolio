// import { useState } from "react";
// import {
//   Grid,
//   Box,
//   Tabs,
//   Tab,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { skills } from "../../data/skillsData";
// import SkillCard from "../skills/SkillCard";

// type SkillCategory = "all" | "frontend" | "backend" | "tools" | "other";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel({ children, value, index, ...other }: TabPanelProps) {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`skills-tabpanel-${index}`}
//       aria-labelledby={`skills-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// const SkillsGrid = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [tabValue, setTabValue] = useState(0);

//   const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
//     setTabValue(newValue);
//   };

//   const categories: { label: string; value: SkillCategory }[] = [
//     { label: "All", value: "all" },
//     { label: "Frontend", value: "frontend" },
//     { label: "Backend", value: "backend" },
//     { label: "Tools", value: "tools" },
//     { label: "Other", value: "other" },
//   ];

//   const filterSkills = (category: SkillCategory) => {
//     if (category === "all") {
//       return skills;
//     }
//     return skills.filter((skill) => skill.category === category);
//   };

//   return (
//     <Box>
//       <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
//         <Tabs
//           value={tabValue}
//           onChange={handleTabChange}
//           variant={isMobile ? "scrollable" : "standard"}
//           scrollButtons={isMobile ? "auto" : undefined}
//           allowScrollButtonsMobile
//           centered={!isMobile}
//           TabIndicatorProps={{
//             style: {
//               backgroundColor: theme.palette.primary.main,
//             },
//           }}
//         >
//           {categories.map((category, index) => (
//             <Tab
//               key={category.value}
//               label={category.label}
//               id={`skills-tab-${index}`}
//               aria-controls={`skills-tabpanel-${index}`}
//               sx={{
//                 fontWeight: 600,
//                 textTransform: "none",
//                 minWidth: isMobile ? "auto" : 120,
//               }}
//             />
//           ))}
//         </Tabs>
//       </Box>

//       {categories.map((category, index) => {
//         const filteredSkills = filterSkills(category.value);

//         return (
//           <TabPanel key={category.value} value={tabValue} index={index}>
//             {filteredSkills.length > 0 ? (
//               <Grid container spacing={3}>
//                 {filteredSkills.map((skill, idx) => (
//                   <Grid item xs={12} sm={6} md={4} key={skill.id}>
//                     <SkillCard skill={skill} index={idx} />
//                   </Grid>
//                 ))}
//               </Grid>
//             ) : (
//               <Box sx={{ textAlign: "center", py: 8 }}>
//                 <Typography variant="h6" color="text.secondary">
//                   No skills in this category yet.
//                 </Typography>
//               </Box>
//             )}
//           </TabPanel>
//         );
//       })}
//     </Box>
//   );
// };

// export default SkillsGrid;
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import { GitHub, Launch, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Project } from "../../types/project.types";
import AnimatedSection from "../common/AnimatedSection";

// Define the props interface explicitly
interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <AnimatedSection delay={index * 0.1}>
      <Card
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: theme.shadows[10],
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          sx={{ objectFit: "cover" }}
        />

        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6" component="h3" gutterBottom>
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              maxHeight: expanded ? "none" : "80px",
              overflow: "hidden",
              textOverflow: expanded ? "initial" : "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: expanded ? "initial" : 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {project.description}
          </Typography>

          {project.description.length > 120 && (
            <Button
              size="small"
              onClick={toggleExpand}
              endIcon={
                <ExpandMore
                  sx={{ transform: expanded ? "rotate(180deg)" : "none" }}
                />
              }
              sx={{ alignSelf: "flex-start", mb: 2 }}
            >
              {expanded ? "Show Less" : "Read More"}
            </Button>
          )}

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
              mb: 2,
              mt: "auto",
            }}
          >
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(0, 0, 0, 0.08)",
                  color: theme.palette.text.secondary,
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              {project.githubUrl && (
                <Tooltip title="View Code">
                  <IconButton
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    size="small"
                  >
                    <GitHub />
                  </IconButton>
                </Tooltip>
              )}
              {project.liveUrl && (
                <Tooltip title="Live Demo">
                  <IconButton
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    size="small"
                  >
                    <Launch />
                  </IconButton>
                </Tooltip>
              )}
            </Box>

            {project.featured && (
              <Chip
                label="Featured"
                size="small"
                color="primary"
                variant="outlined"
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default ProjectCard;
