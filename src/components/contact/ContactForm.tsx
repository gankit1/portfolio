import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Alert,
  AlertTitle,
  Snackbar,
  CircularProgress,
  Paper,
  useTheme,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import AnimatedSection from "../common/AnimatedSection";

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Simulate sending email
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success scenario
      setSnackbar({
        open: true,
        severity: "success",
        message: "Your message has been sent successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      // Error scenario
      setSnackbar({
        open: true,
        severity: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <AnimatedSection>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              fullWidth
              required
              id="name"
              name="name"
              label="Your Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name && "Please enter your name"}
              disabled={loading}
              sx={{ mb: { xs: 2, sm: 0 } }}
            />
            <TextField
              fullWidth
              required
              id="email"
              name="email"
              label="Your Email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email && "Please enter a valid email"}
              disabled={loading}
            />
          </Box>

          <TextField
            fullWidth
            id="subject"
            name="subject"
            label="Subject"
            variant="outlined"
            value={formData.subject}
            onChange={handleChange}
            disabled={loading}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            required
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            helperText={errors.message && "Please enter your message"}
            disabled={loading}
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SendIcon />
              )
            }
            disabled={loading}
            sx={{ px: 4 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbar.severity as "success" | "error"}
            sx={{ width: "100%" }}
          >
            <AlertTitle>
              {snackbar.severity === "success" ? "Success" : "Error"}
            </AlertTitle>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>
    </AnimatedSection>
  );
};

export default ContactForm;
