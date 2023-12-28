import React from "react";
import { TextInput } from "./TextInput";
import "../../../app/globals.css";
import { FormProvider, useForm } from "react-hook-form";
import { InputLabel } from "@mui/material";
import { Button } from "./Button";

export default function ContactUsFormComponent() {
  const methods = useForm({});
  const saveData = (data: any) => {
    console.log("data", data);
  };
  return (
    <div>
      {" "}
      <div className="cbox-19-1 p_item">
        <FormProvider {...methods}>
          <form
            className="e_form-44 s_form_layout1 response-transition"
            onSubmit={methods.handleSubmit(saveData)}
            method="post"
          >
            <div className="cbox-44-0 p_formItem">
              <p className="e_text-50 s_title response-transition">
                Look forward to receiving your comments or feedback!
              </p>
              <div className="e_clueName-45 s_form1 form-group response-transition">
                <label className="p_label">
                  <InputLabel className="s_label">Name</InputLabel>
                </label>
                <div className="">
                  <div className="input-group">
                    <TextInput
                      variant="outlined"
                      label="Name"
                      size="small"
                      iName="Name"
                      type="text"
                      required={true}
                    />
                    <div className="invalid-feedback"></div>
                  </div>
                </div>
              </div>
              <div className="e_clueMobile-47 s_form1 form-group response-transition">
                <label className="p_label">
                  <InputLabel className="s_label">Phone Number</InputLabel>
                </label>
                <div className="">
                  <div className="input-group">
                    <TextInput
                      variant="outlined"
                      label="Phone"
                      size="small"
                      iName="Phone"
                      type="number"
                      required={true}
                    />
                    <div className="invalid-feedback"></div>
                  </div>
                </div>
              </div>
              <div className="e_clueEmail-48 s_form1 form-group">
                <label className="p_label">
                  <InputLabel className="s_label">Email</InputLabel>
                </label>
                <div className="">
                  <div className="input-group">
                    <TextInput
                      variant="outlined"
                      label="Email"
                      size="small"
                      iName="Email"
                      type="email"
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <div className="e_textarea-49 s_form1 form-group">
                <label className="p_label">
                  <span className="s_label">Intention content </span>
                </label>
                <div className="">
                  <textarea
                    className="form-control s_form-control s_input p_input is-invalid"
                    rows={3}
                    name="textarea"
                    data-name="e_textarea-49"
                    placeholder="Please enter the content of your intention"
                  ></textarea>
                </div>
              </div>

              <Button
                variant="outlined"
                type="submit"
                className="e_formBtn-46 s_button1 btn btn-primary"
                label="Submit"
              ></Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
