// Our inner form component. Will be wrapped with Formik({..})
const InnerForm = props => {
    const { touched, errors } = props;

    const panels = [
        {
            title: {
                content: <Label className="label-override" content="General" />
            },
            content: { content: <InnerGeneralTab {...props} /> }
        }
    ];
    const Style = {
        fontSize: "15px",
        marginBottom: "15px"
    };
    return (
        <Form>

        </Form>
    );
};

const withSemanticUIFormik = props => WrappedComponent => {
    return withFormik(props)(
        class extends React.Component {
            handleBlur = (e, data) => {
                if (data && data.name) {
                    this.props.setFieldValue(data.name, data.value);
                    this.props.setFieldTouched(data.name);
                }
                if (e.target && e.target.name) {
                    this.props.setFieldValue(e.target.name, e.target.value);
                    this.props.setFieldTouched(e.target.name);
                }
            };
            handleChange = (e, data) => {
                if (data && data.name) {
                    this.props.setFieldValue(data.name, data.value);
                }
            };

            render() {
                return (
                    <WrappedComponent
                        {...this.props}
                        handleBlur={this.handleBlur}
                        handleChange={this.handleChange}
                    />
                );
            }
        }
    );
};

const ReusableForm = withSemanticUIFormik({
    mapPropsToValues: () => ({ email: "" }),
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required!")
    }),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: "reactForm" // helps with React DevTools
})(InnerForm);