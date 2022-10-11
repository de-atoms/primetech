import { useForm, ValidationError } from "@formspree/react";
import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
const Newsletter = () => {
  const [state, handleSubmit] = useForm("mnqwgbdk");
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  let save = state.succeeded;

  if (save) {
    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You have successfully subscribed to our Newsletter!
        </Alert>
      </Snackbar>
    );
  }
  return (
    <div className="Newsletter">
      <div className="container">
        <div className="row">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-input">
              <h4 className={save.succeeded ? "block none" : "none"}>
                Your request is successful
              </h4>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your mail"
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="form-btn">
              <button type="submit" disabled={state.submitting}>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
