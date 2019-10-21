import { Button, TextField } from "@material-ui/core";
import { Field, FieldArray, Form, Formik, getIn } from "formik";
import * as React from "react";
import { generate } from "shortid";
import * as yup from "yup";
// import { TextField } from "material-ui";

const validationSchema = yup.object().shape({
  users: yup.array().of(
    yup.object().shape({
      firstName: yup
        .string()
        .min(2)
        .max(25),
      login: yup
        .string()
        .min(2)
        .max(25)
    })
  )
});

const customInput = ({ field, form: { errors, touched } }) => {
  const errorMsg = getIn(errors, field.name);
  const touchedItem = getIn(touched, field.name);

  return (
    <>
      <TextField {...field} />
      {errorMsg && (
        <div style={{ color: "red" }} className="error">
          {touchedItem && errorMsg}
        </div>
      )}
    </>
  );
};

const SignUpFieldArray = () => {
  return (
    <Formik
      initialValues={{
        users: [{ id: "1", firstName: "lucas", login: "test" }]
      }}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <>
          <Form className="add-edit-form">
            <FieldArray name="users">
              {({ push, remove }) => (
                <>
                  <div className="add-edit-form">
                    {values.users.map((el, index) => {
                      return (
                        <>
                          <div key={el.id} className="add-edit-form">
                            <p className="label">First Name:</p>
                            <Field
                              name={`users[${index}].firstName`}
                              component={customInput}
                            />
                            <p className="label">Login:</p>

                            <Field
                              name={`users[${index}].login`}
                              component={customInput}
                            />
                            <div onClick={() => remove(index)}>X</div>
                          </div>
                        </>
                      );
                    })}
                    <Button
                      type="button"
                      onClick={() =>
                        push({
                          id: generate(),
                          firstName: "",
                          login: ""
                        })
                      }
                    >
                      add user
                    </Button>
                  </div>
                </>
              )}
            </FieldArray>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default SignUpFieldArray;
