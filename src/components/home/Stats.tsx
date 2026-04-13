import { Grid, Box, Typography } from "@mui/material";
import { Code, Psychology, Devices, DeveloperMode } from "@mui/icons-material";
import AnimatedSection from "../common/AnimatedSection";
import GlassCard from "../common/GlassCard";

interface StatItemProps {
  icon: React.ReactNode;
  count: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, count, label, delay }: StatItemProps) => {

  return (
    <AnimatedSection delay={delay}>
      <GlassCard>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            py: 1,
          }}
        >
          <Box
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 56,
              height: 56,
              borderRadius: "14px",
              background: "linear-gradient(135deg, rgba(41,123,180,0.12), rgba(139,92,246,0.08))",
              color: "#297BB4",
            }}
          >
            {icon}
          </Box>

          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: 800,
              mb: 0.5,
              background: "linear-gradient(135deg, #297BB4, #549DD4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {count}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            {label}
          </Typography>
        </Box>
      </GlassCard>
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
      count: "4+",
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
    <Box sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {statsData.map((stat, index) => (
          <Grid key={index} size={{ xs: 6, sm: 6, md: 3 }}>
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
