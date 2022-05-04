import { useState } from "react";

export default function Form(){

      const [values, setValues] = useState({
        fullName: "",
        email: "",
        message: "",
      });

      const [submitted, setSubmitted] = useState(false);

      const [valid, setValid] = useState(false);

      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if(values.fullName && values.email && values.message){
            //call service method
            setValid(true)
            setValues({fullName:' ', email:' ', message:' '})
        }
      };

      const handleFullName = (e) => {
        setValues({ ...values, fullName: e.target.value });
      };

      const handleEmail = (e) => {
        setValues({ ...values, email: e.target.value });
      };

      const handleMessage = (e) => {
        setValues({ ...values, message: e.target.value });
      };

    return (
      <div>
        {submitted && valid ? <div>Thank you for your message</div> : null}
        <form onSubmit={handleSubmit}>
          <p>Full Name</p>
          <input value={values.fullName} onChange={handleFullName} />
          {submitted && !values.fullName ? (
            <span>Please enter a full name</span>
          ) : null}
          <p>Email</p>
          <input value={values.email} onChange={handleEmail} />
          {submitted && !values.email ? (
            <span>Please enter an email</span>
          ) : null}
          <p>Message</p>
          <input value={values.message} onChange={handleMessage} />
          {submitted && !values.message ? (
            <span>Please enter a message</span>
          ) : null}
          <button>Submit</button>
        </form>
      </div>
    );
}