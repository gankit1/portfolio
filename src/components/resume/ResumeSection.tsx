import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  CalendarMonth,
  LocationOn,
  Work,
  School,
  Star,
  Code,
  Business,
} from "@mui/icons-material";
import {
  personalInfo,
  workExperience,
  education,
  projects,
  achievements,
  skills,
} from "../../data/resumeData";
import AnimatedSection from "../common/AnimatedSection";

const ResumeSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box component="section" sx={{ py: 6 }}>
      <AnimatedSection>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          fontWeight="bold"
          textAlign="center"
        >
          Resume
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
        >
          {personalInfo.summary}
        </Typography>
      </AnimatedSection>

      <Grid container spacing={4}>
        {/* Personal Info */}
        <Grid item xs={12}>
          <AnimatedSection delay={0.1}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold"
              >
                Personal Information
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Business
                      sx={{ mr: 1, color: theme.palette.primary.main }}
                    />
                    <Typography variant="body1">{personalInfo.name}</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <LocationOn
                      sx={{ mr: 1, color: theme.palette.primary.main }}
                    />
                    <Typography variant="body1">
                      {personalInfo.location}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <CalendarMonth
                      sx={{ mr: 1, color: theme.palette.primary.main }}
                    />
                    <Typography variant="body1">
                      {personalInfo.dateOfBirth}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </AnimatedSection>
        </Grid>

        {/* Work Experience */}
        <Grid item xs={12}>
          <AnimatedSection delay={0.2}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold"
              >
                Work Experience
              </Typography>
              <Divider sx={{ mb: 3 }} />

              {workExperience.map((job, index) => (
                <Box
                  key={index}
                  sx={{ mb: index < workExperience.length - 1 ? 4 : 0 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" fontWeight="medium">
                        {job.position}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1 }}
                      >
                        <Work
                          fontSize="small"
                          sx={{ mr: 1, color: theme.palette.text.secondary }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {job.company}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1 }}
                      >
                        <CalendarMonth
                          fontSize="small"
                          sx={{ mr: 1, color: theme.palette.text.secondary }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {job.startDate} - {job.endDate}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1 }}
                      >
                        <LocationOn
                          fontSize="small"
                          sx={{ mr: 1, color: theme.palette.text.secondary }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {job.location}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={8}>
                      <List dense disablePadding>
                        {job.highlights.map((highlight, i) => (
                          <ListItem
                            key={i}
                            alignItems="flex-start"
                            sx={{ pl: 0 }}
                          >
                            <ListItemIcon sx={{ minWidth: 28 }}>
                              <Star
                                sx={{
                                  fontSize: "0.8rem",
                                  color: theme.palette.primary.main,
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  dangerouslySetInnerHTML={{
                                    __html: highlight,
                                  }}
                                />
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>

                  {index < workExperience.length - 1 && (
                    <Divider sx={{ my: 3 }} />
                  )}
                </Box>
              ))}
            </Paper>
          </AnimatedSection>
        </Grid>

        {/* Education */}
        <Grid item xs={12} md={6}>
          <AnimatedSection delay={0.3}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold"
              >
                Education
              </Typography>
              <Divider sx={{ mb: 3 }} />

              {education.map((edu, index) => (
                <Box
                  key={index}
                  sx={{ mb: index < education.length - 1 ? 3 : 0 }}
                >
                  <Typography variant="h6" fontWeight="medium">
                    {edu.degree}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <School
                      fontSize="small"
                      sx={{ mr: 1, color: theme.palette.text.secondary }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {edu.institution}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <CalendarMonth
                      fontSize="small"
                      sx={{ mr: 1, color: theme.palette.text.secondary }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {edu.startDate} - {edu.endDate}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <LocationOn
                      fontSize="small"
                      sx={{ mr: 1, color: theme.palette.text.secondary }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {edu.location}
                    </Typography>
                  </Box>

                  {edu.field && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Field: {edu.field}
                    </Typography>
                  )}

                  {index < education.length - 1 && <Divider sx={{ my: 2 }} />}
                </Box>
              ))}
            </Paper>
          </AnimatedSection>
        </Grid>

        {/* Projects */}
        <Grid item xs={12} md={6}>
          <AnimatedSection delay={0.4}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold"
              >
                Projects
              </Typography>
              <Divider sx={{ mb: 3 }} />
              {projects.map((project, index) => (
                <Box
                  key={index}
                  sx={{ mb: index < projects.length - 1 ? 3 : 0 }}
                >
                  <Typography variant="h6" fontWeight="medium">
                    {project.title}
                  </Typography>

                  <Box
                    sx={{ display: "flex", alignItems: "center", mt: 1, mb: 1 }}
                  >
                    <CalendarMonth
                      fontSize="small"
                      sx={{ mr: 1, color: theme.palette.text.secondary }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {project.period}
                    </Typography>
                  </Box>

                  <List dense disablePadding>
                    {project.description.map((desc, i) => (
                      <ListItem key={i} alignItems="flex-start" sx={{ pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <Code
                            sx={{
                              fontSize: "0.8rem",
                              color: theme.palette.primary.main,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="body2"
                              dangerouslySetInnerHTML={{ __html: desc }}
                            />
                          }
                        />
                      </ListItem>
                    ))}
                  </List>

                  {index < projects.length - 1 && <Divider sx={{ my: 2 }} />}
                </Box>
              ))}
            </Paper>
          </AnimatedSection>
        </Grid>

        {/* Skills */}
        <Grid item xs={12} md={6}>
          <AnimatedSection delay={0.5}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold"
              >
                Skills
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Typography variant="h6" gutterBottom>
                Technical Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                {skills.technical.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="primary"
                    variant="outlined"
                    size={isMobile ? "small" : "medium"}
                  />
                ))}
              </Box>

              <Typography variant="h6" gutterBottom>
                Soft Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {skills.soft.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="secondary"
                    variant="outlined"
                    size={isMobile ? "small" : "medium"}
                  />
                ))}
              </Box>
            </Paper>
          </AnimatedSection>
        </Grid>

        {/* Achievements */}
        <Grid item xs={12} md={6}>
          <AnimatedSection delay={0.6}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold"
              >
                Achievements
              </Typography>
              <Divider sx={{ mb: 3 }} />

              {achievements.map((achievement, index) => (
                <Box
                  key={index}
                  sx={{ mb: index < achievements.length - 1 ? 3 : 0 }}
                >
                  <Typography variant="h6" fontWeight="medium">
                    {achievement.title}
                  </Typography>

                  <Box
                    sx={{ display: "flex", alignItems: "center", mt: 1, mb: 1 }}
                  >
                    <CalendarMonth
                      fontSize="small"
                      sx={{ mr: 1, color: theme.palette.text.secondary }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {achievement.date}
                    </Typography>
                  </Box>

                  <Typography variant="body2">
                    {achievement.description}
                  </Typography>

                  {index < achievements.length - 1 && (
                    <Divider sx={{ my: 2 }} />
                  )}
                </Box>
              ))}
            </Paper>
          </AnimatedSection>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeSection;
