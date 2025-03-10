import { Grid, Paper, Box, Typography, useTheme } from "@mui/material";
import { Code, Psychology, Devices, DeveloperMode } from "@mui/icons-material";
import AnimatedSection from "../common/AnimatedSection";

interface StatItemProps {
  icon: React.ReactNode;
  count: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, count, label, delay }: StatItemProps) => {
  const theme = useTheme();

  return (
    <AnimatedSection delay={delay}>
      <Paper
        elevation={2}
        sx={{
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: theme.shadows[8],
          },
        }}
      >
        <Box
          sx={{
            mb: 2,
            color: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(25, 118, 210, 0.1)"
                : "rgba(25, 118, 210, 0.08)",
          }}
        >
          {icon}
        </Box>

        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          {count}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {label}
        </Typography>
      </Paper>
    </AnimatedSection>
  );
};

const Stats = () => {
  const statsData = [
    {
      icon: <Code fontSize="large" />,
      count: "20+",
      label: "Projects Completed",
      delay: 0.1,
    },
    {
      icon: <Psychology fontSize="large" />,
      count: "3+",
      label: "Years Experience",
      delay: 0.2,
    },
    {
      icon: <Devices fontSize="large" />,
      count: "15+",
      label: "Tech Stack Skills",
      delay: 0.3,
    },
    {
      icon: <DeveloperMode fontSize="large" />,
      count: "99%",
      label: "Client Satisfaction",
      delay: 0.4,
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Grid container spacing={3}>
        {statsData.map((stat, index) => (
          <Grid item xs={6} md={3} key={index}>
            <StatItem
              icon={stat.icon}
              count={stat.count}
              label={stat.label}
              delay={stat.delay}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;
