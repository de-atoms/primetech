import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

const RequestQuote = () => {
  const [opensnack, setOpenSnack] = useState(true);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [niche, setNiche] = useState("");
  const [contactmethod, setContactMethod] = useState("");
  const [help, setHelp] = useState("");
  const [websiteexisting, setWebsiteExisting] = useState("");
  const [amount, setAmount] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [output, setOutput] = useState("");
  const [detail, setDetail] = useState("");
  const [link, setLink] = useState("");
  const [idea, setIdea] = useState("");

  const handleClose = () => {
    setOpenSnack(false);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    console.log(
      firstname,
      lastname,
      email,
      phone,
      company,
      niche,
      contactmethod,
      help,
      websiteexisting,
      amount,
      startdate,
      enddate,
      output,
      detail,
      link,
      idea
    );

    return (
      <Snackbar open={opensnack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You have successfully subscribed to our Newsletter!
        </Alert>
      </Snackbar>
    );
  };

  // note: you can do an if statement if the form has been submitted;
  
  return (
    <div className="request__quote">
      <div className="container">
        <div className="row">
          <form noValidate autoComplete="off" onSubmit={HandleSubmit}>
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
                onChange={(e) => setFirstName(e.target.value)}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                type="text"
                required
                className="form-input"
              />
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                type="text"
                required
              />
            </div>

            <div className="form__item">
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                required
                type="email"
                fullWidth
              />
            </div>
            <div className="form__item">
              <TextField
                onChange={(e) => setPhone(e.target.value)}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                required
                type="tel"
                fullWidth
              />
            </div>
            <div className="form__item">
              <TextField
                onChange={(e) => setCompany(e.target.value)}
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
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
                  name="row-radio-buttons-group"
                  onChange={(e) => setNiche(e.target.value)}
                  required
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
              </FormControl>
            </div>
            <div className="form__item">
              <FormLabel id="demo-controlled-radio-buttons-group">
                What is your preferred contact method?
              </FormLabel>
              <RadioGroup onChange={(e) => setContactMethod(e.target.value)}>
                <FormControlLabel
                  value="skype"
                  control={<Radio />}
                  label="Skype"
                />
                <FormControlLabel
                  value="slack"
                  control={<Radio />}
                  label="Slack"
                />
                <FormControlLabel
                  value="zoom"
                  control={<Radio />}
                  label="Zoom"
                />
                <FormControlLabel
                  value="email"
                  control={<Radio />}
                  label="Email"
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
                  value={help}
                  onChange={(e) => setHelp(e.target.value)}
                  label="How can we help you?"
                  required
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
              </FormControl>
            </div>
            <div className="form__item">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Do you already have a website
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => setWebsiteExisting(e.target.value)}
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
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="form__item grid">
              <TextField
                value={startdate}
                onChange={(e) => setStartDate(e.target.value)}
                id="outlined-text-date"
                variant="outlined"
                label="Estimated Start Date"
                focused
                type="date"
                helperText="*Optional"
                className="text-date"
              />
              <TextField
                value={enddate}
                onChange={(e) => setEndDate(e.target.value)}
                id="outlined-text-date"
                variant="outlined"
                label="Estimated Finish Date"
                focused
                type="date"
                helperText="*Optional"
                className="text-date"
              />
            </div>
            <div className="form__item">
              <FormLabel id="demo-controlled-radio-buttons-group">
                What kind of output (final results) you are expecting from me?
              </FormLabel>
              <RadioGroup
                value={output}
                onChange={(e) => setOutput(e.target.value)}
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
            </div>
            <div className="form__item">
              <h4>Competitors and Related Work</h4>
              <FormLabel
                className="mb-1"
                id="demo-controlled-radio-buttons-group"
              >
                Please provide some inforation about your competitors and some
                input on what kind of design you like
              </FormLabel>
              <TextField
                onChange={(e) => setDetail(e.target.value)}
                sx={{ mt: 3 }}
                id="filled-textarea"
                label="Please provide details of our task so that I could do some preparation for our meeting"
                type="text"
                variant="filled"
                multiline
                rows={6}
                fullWidth
                required
              />
              <TextField
                onChange={(e) => setLink(e.target.value)}
                sx={{ mt: 3 }}
                id="filled-textarea"
                label="Please provide three links to your competitors, you can also write three details about each"
                type="text"
                variant="filled"
                multiline
                rows={6}
                fullWidth
                required
              />
              <TextField
                onChange={(e) => setIdea(e.target.value)}
                sx={{ mt: 3 }}
                id="filled-textarea"
                label="Please provide three apps/websites that you like. It can be any app/website. It will give me some idea about what kind of design you are looking for."
                type="text"
                variant="filled"
                multiline
                rows={6}
                fullWidth
                helperText="*Optional"
              />
            </div>
            <Button type="submit" variant="contained" fullWidth>
              Submit form
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
