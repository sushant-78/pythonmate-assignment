import { useState, useEffect } from "react";
import "./SignupPage.css";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions";

const SignupPage = () => {
    const dispatch = useDispatch();

    //accessing the reducers to get the data.
    const { user } = useSelector((state) => state.userReducer);

    const { error } = useSelector((state) => state.errorReducer);

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    //to handle form changes.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //to handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        setFormValues({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        });
    };

    //useEffect hook to dispatch action.
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            dispatch(signUp(formValues));
        }
    }, [formErrors]);

    //function to validate form.
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.first_name) {
            errors.first_name = "first name is required!";
        }

        if (!values.last_name) {
            errors.last_name = "last name is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        return errors;
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                {Object.keys(user).length === 0 ? (
                    <p></p>
                ) : (
                    <p>{user.message}</p>
                )}
                {Object.keys(error).length === 0 ? (
                    <p></p>
                ) : (
                    <p>{error.message}</p>
                )}

                <h1>Signup Form</h1>
                <div>
                    <div className="input-container">
                        <label>First name:</label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="first name"
                            value={formValues.first_name}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.first_name}</p>

                    <div className="input-container">
                        <label>Last name:</label>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="last name"
                            value={formValues.last_name}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.last_name}</p>

                    <div className="input-container">
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.email}</p>

                    <div className="input-container">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.password}</p>
                    <button className="button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;
