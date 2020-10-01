import React, { Component } from "react";
import { Formik, Field } from "formik";

class AddUser extends Component {
  getInitialValues = () => {
    return this.props.user
      ? { ...this.props.user }
      : { name: "", username: "", email: "" };
  };

  submit = (values) => {
    this.props.onSave(values);
  };

  render() {
    return (
      <Formik
        initialValues={this.getInitialValues()}
        onSubmit={this.submit}
        enableReinitialize={true}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <Field name="name" placeholder="name" />
            <Field name="username" placeholder="username" />
            <Field name="email" placeholder="email" />
            <button type="submit">save</button>
          </form>
        )}
      </Formik>
    );
  }
}

export default AddUser;
