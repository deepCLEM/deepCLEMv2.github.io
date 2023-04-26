import React, { PureComponent } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ActionButton from "../ActionButton";
import "./styles.css";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name, country;
  const submit = () =>
    email &&
    name &&
    country &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      LNAME: name.value,
      MMERGE1: country.value
    });

  return (
    <div className="mailchimp-submit-container">
      {/* {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
                <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )} */}
      <input className="mailchimp-submit-cell-content"
        ref={(node) => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input className="mailchimp-submit-cell-content"
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <input className="mailchimp-submit-cell-content"
        ref={(node) => (country = node)}
        type="country"
        placeholder="Where are you"
      />
      <br />
      <div style={{ width:"180px" }} onClick={submit}>
        <ActionButton title={"SUBMIT"} />
      </div>
    </div>
  );
};

export default class MailimpContainer extends PureComponent {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const url =
      "https://gmail.us21.list-manage.com/subscribe/post?u=b2caefb49116e92ac024ec1d0&id=47be3591bc&f_id=0026ace1f0";
    return (
      <div className="mailchimp-Container">
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}
