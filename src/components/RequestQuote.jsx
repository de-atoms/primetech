import React, { useRef, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Modal,
  Typography,
  Box,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #f2f2f2",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const RequestQuote = () => {
  const [opensnack, setOpenSnack] = useState(false);

  const handleClose = () => {
    setOpenSnack(false);
  };

  const form = useRef();

  const handleFormSubmit = (values) => {
    console.log(values);
    emailjs
      .sendForm(
        "service_ysogkvl",
        "template_g5u6tqs",
        form.current,
        "IwHYxcoV1JTIrOzPM"
      )
      .then(
        (result) => {
          if ((result.test = "OK")) {
            setOpenSnack(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="request__quote">
      <div className="container">
        <div className="row">
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form ref={form} onSubmit={handleSubmit}>
                <FormControl>
                  <h4>Basic Info About You</h4>
                  <FormLabel
                    id="demo-controlled-radio-buttons-group"
                    sx={{ mb: 2 }}
                  >
                    Please tell me a little bit about yourself.
                  </FormLabel>
                </FormControl>

                <div className="form__item grid">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    variant="outlined"
                    type="text"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    className="form-input"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    variant="outlined"
                    type="text"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                  />
                </div>

                <div className="form__item">
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    type="email"
                    fullWidth
                  />
                </div>

                <div className="form__item">
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    type="tel"
                    fullWidth
                  />
                </div>

                <div className="form__item">
                  <TextField
                    id="outlined-basic"
                    label="Company Name"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.company}
                    name="company"
                    error={!!touched.company && !!errors.company}
                    helperText={touched.company && errors.company}
                    type="text"
                    fullWidth
                  />
                </div>

                <div className="form__item">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      What is your company niche
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      // name="row-radio-buttons-group"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.niche}
                      name="niche"
                    >
                      <FormControlLabel
                        value="startup"
                        control={<Radio />}
                        label="Startup"
                      />
                      <FormControlLabel
                        value="Business"
                        control={<Radio />}
                        label="Business"
                      />
                      <FormControlLabel
                        value="agency"
                        control={<Radio />}
                        label="Agency"
                      />
                      <FormControlLabel
                        value="blog"
                        control={<Radio />}
                        label="Blogs"
                      />
                      <FormControlLabel
                        value="others"
                        control={<Radio />}
                        label="Others"
                      />
                    </RadioGroup>
                    {!!touched.niche && !!errors.niche ? (
                      <FormHelperText error>{errors.niche}</FormHelperText>
                    ) : null}
                  </FormControl>
                </div>

                <div className="form__item">
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    What is your preferred contact method?
                  </FormLabel>
                  <RadioGroup
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contactMethod}
                    name="contactMethod"
                  >
                    <FormControlLabel
                      value="skype"
                      control={<Radio />}
                      label="Skype"
                    />
                    <FormControlLabel
                      value="Telegram"
                      control={<Radio />}
                      label="Telegram"
                    />
                    <FormControlLabel
                      value="zoom"
                      control={<Radio />}
                      label="Zoom"
                    />
                    <FormControlLabel
                      value="google-meet"
                      control={<Radio />}
                      label="Google Meet"
                    />
                    <FormControlLabel
                      value="whatsapp"
                      control={<Radio />}
                      label="Whatsapp"
                    />
                    <FormControlLabel
                      value="others means"
                      control={<Radio />}
                      label="Others"
                    />
                  </RadioGroup>
                  {!!touched.contactMethod && !!errors.contactMethod ? (
                    <FormHelperText error>
                      {errors.contactMethod}
                    </FormHelperText>
                  ) : null}
                </div>

                <div className="form__item">
                  <h4>Project Info</h4>
                  <FormLabel
                    className="mb-1"
                    id="demo-controlled-radio-buttons-group"
                  >
                    Please provide some details about this project{" "}
                  </FormLabel>
                  <FormControl fullWidth sx={{ mt: 3 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      How can we help you?
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="How can we help you?"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.help}
                      name="help"
                      error={!!touched.help && !!errors.help}
                    >
                      <MenuItem value="UIDesign">UI Design</MenuItem>
                      <MenuItem value="Landing Page Design">
                        Landing Page Design
                      </MenuItem>
                      <MenuItem value="WordPress Development">
                        WordPress Development
                      </MenuItem>
                      <MenuItem value="Mobile Development">
                        Mobile Development
                      </MenuItem>
                      <MenuItem value="Web App Development">
                        Web App Development
                      </MenuItem>
                      <MenuItem value="Server Mgt & Maintenance">
                        Server Mgt & Maintenance
                      </MenuItem>
                      <MenuItem value="Consultation">Consultation</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                    {!!touched.help && !!errors.help ? (
                      <FormHelperText error>{errors.help}</FormHelperText>
                    ) : null}
                  </FormControl>
                </div>

                <div className="form__item">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Do you already have a website
                    </FormLabel>
                    <RadioGroup
                      row
                      // aria-labelledby="demo-row-radio-buttons-group-label"
                      // name="row-radio-buttons-group"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.websiteExisting}
                      name="websiteExisting"
                    >
                      <FormControlLabel
                        value="yes, I have a website already."
                        control={<Radio />}
                        label="Yes, I have a website already."
                      />
                      <FormControlLabel
                        value="no, its a new business"
                        control={<Radio />}
                        label="No, its a new business"
                      />
                      <FormControlLabel
                        value="yes, I have a website already and its a new business"
                        control={<Radio />}
                        label="Both"
                      />
                    </RadioGroup>
                    {!!touched.websiteExisting && !!errors.websiteExisting ? (
                      <FormHelperText error>
                        {errors.websiteExisting}
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                </div>

                <div className="form__item">
                  <h4>Budget and Deadlines</h4>
                  <FormLabel
                    className="mb-1"
                    id="demo-controlled-radio-buttons-group"
                  >
                    Please provide some information about the budget & deadline
                  </FormLabel>
                  <FormControl fullWidth sx={{ mt: 3 }}>
                    <FormLabel htmlFor="outlined-adornment-amount">
                      What is your budget range?
                    </FormLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      type="number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.amount}
                      name="amount"
                      error={!!touched.amount && !!errors.amount}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                    {!!touched.amount && !!errors.amount ? (
                      <FormHelperText error>{errors.amount}</FormHelperText>
                    ) : null}
                  </FormControl>
                </div>

                <div className="form__item">
                  <TextField
                    id="outlined-basic"
                    label="Estimated Duration"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.duration}
                    name="duration"
                    variant="outlined"
                    type="text"
                    error={!!touched.duration && !!errors.duration}
                    helperText="(in weekss)"
                    fullWidth
                  />
                </div>

                <div className="form__item">
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    What kind of output (final results) you are expecting from
                    me?
                  </FormLabel>
                  <RadioGroup
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.output}
                    name="output"
                  >
                    <FormControlLabel
                      value="design file"
                      control={<Radio />}
                      label="Design File"
                    />
                    <FormControlLabel
                      value="design file + wordpress implemntation"
                      control={<Radio />}
                      label="Design file + wordpress implementation"
                    />
                    <FormControlLabel
                      value="design file + Web Apllication"
                      control={<Radio />}
                      label="Design File + Web Application"
                    />
                    <FormControlLabel
                      value="application"
                      control={<Radio />}
                      label="Applcation"
                    />
                    <FormControlLabel
                      value="others"
                      control={<Radio />}
                      label="others"
                    />
                  </RadioGroup>
                  {!!touched.output && !!errors.output ? (
                    <FormHelperText error>{errors.output}</FormHelperText>
                  ) : null}
                </div>

                <div className="form__item">
                  <h4>Competitors and Related Work</h4>
                  <FormLabel
                    className="mb-1"
                    id="demo-controlled-radio-buttons-group"
                  >
                    Please provide some inforation about your competitors and
                    some input on what kind of design you like
                  </FormLabel>
                  <TextField
                    sx={{ mt: 3 }}
                    id="filled-textarea"
                    label="Please provide details of our task so that I could do some preparation for our meeting"
                    type="text"
                    variant="filled"
                    multiline
                    rows={6}
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.detail}
                    name="detail"
                    error={!!touched.detail && !!errors.detail}
                    helperText={touched.detail && errors.detail}
                  />
                  <TextField
                    sx={{ mt: 3 }}
                    id="filled-textarea"
                    label="Please provide three links to your competitors, you can also write three details about each"
                    type="text"
                    variant="filled"
                    multiline
                    rows={6}
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.link}
                    name="link"
                    error={!!touched.link && !!errors.link}
                    helperText={touched.link && errors.link}
                  />
                  <TextField
                    sx={{ mt: 3 }}
                    id="filled-textarea"
                    label="Please provide three apps/websites that you like. It can be any app/website. It will give us some idea about what kind of design you are looking for."
                    type="text"
                    variant="filled"
                    multiline
                    rows={6}
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.idea}
                    name="idea"
                    error={!!touched.idea && !!errors.idea}
                    helperText={touched.idea && errors.idea}
                  />
                </div>

                <Button type="submit" variant="contained" fullWidth>
                  Submit form
                </Button>
              </form>
            )}
          </Formik>
          <Modal
            open={opensnack}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ color: "green" }}
              >
                Congratulations,
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{ color: "green" }}
              >
                Your Message Has Been Sent Successfully!
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Link to="/" exact="true">
                  Close
                </Link>
              </Box>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  niche: "",
  contactMethod: "",
  help: "",
  websiteExisting: "",
  amount: "",
  duration: "",
  output: "",
  detail: "",
  link: "",
  idea: "",
};

const emailExp =
  /^([a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup
    .string()
    .matches(emailExp, "Please provide a valid email address")
    .required("required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  company: yup.string().required("required"),
  niche: yup.string().required("required"),
  contactMethod: yup.string().required("required"),
  help: yup.string().required("required"),
  websiteExisting: yup.string().required("required"),
  amount: yup.string().required("required"),
  duration: yup.string().required("required"),
  output: yup.string().required("required"),
  detail: yup.string().required("required"),
  link: yup.string().required("required"),
  idea: yup.string().required("required"),
});

export default RequestQuote;
