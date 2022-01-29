import { useState, useEffect } from "react";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions";

const LoginPage = () => {
    const dispatch = useDispatch();

    //getting data from both the reducers.
    const { user } = useSelector((state) => state.userReducer);
    const { error } = useSelector((state) => state.errorReducer);

    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    //to handle form changes.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //to handle form submit.
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        setFormValues({
            email: "",
            password: "",
        });
    };

    //useEffect hook to dispatch the action.
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            dispatch(logIn(formValues));
        }
    }, [formErrors]);

    //function to validate form.
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
                <h1>Login Form</h1>
                <div>
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

export default LoginPage;
