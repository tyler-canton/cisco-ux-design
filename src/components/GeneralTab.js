import React, { Component } from "react";
import { FieldArray } from "formik";

import CSSModules from "react-css-modules";
import { Form } from "semantic-ui-react";
const styles = require("./GeneralTab.less");
const options = {
  allowMultiple: true
};
class InnerGeneralTab extends Component {
  render() {
    const { values, touched, errors, handleChange, handleBlur } = this.props;
    return (
      <div>
        <Form.Input
          id="email"
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email"
          name="email"
          value={values.email}
          width={12}
          required
          error={errors.email && touched.email}
        />
        <FieldArray
          name="friends"
          render={arrayHelpers => (
            <div>
              {values.friends && values.friends.length > 0 ? (
                values.friends.map((friend, index) => (
                  <div key={index}>
                    <Form.Field name={`friends.${index}`} />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}>
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => arrayHelpers.insert(index, "")} >
                      +
                    </button>
                  </div>
                ))
              ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                </button>
                )}
              <div>
                <button type="submit">Submit</button>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default (InnerGeneralTab = CSSModules(InnerGeneralTab, styles, options));
