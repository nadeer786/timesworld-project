import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      navigate("/countries");
    }
  };

  return (
    <Container fluid className="login-container">
      <div className="login-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign In</h1>
          <p>
            <strong>New user? </strong>
            <a href="googl.com">Create an account</a>
          </p>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your username"
              className="form-input"
              {...register("username", {
                required: "Username is required",
              })}
            />
            <br />
            {errors.username && (
              <Form.Text className="text-danger">
                {errors.username.message}
              </Form.Text>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              className="form-input"
              style={{ marginTop: "10px" }}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <br />

            {errors.password && (
              <Form.Text className="text-danger">
                {errors.password.message}
              </Form.Text>
            )}
          </div>
          <div className="form-group">
            <input type="checkbox" className="input-checkbox" />
          </div>

          <input type="submit" name="submit" value="Sign In" />
        </form>
        <div
          style={{
            width: "280px",
            position: "relative",
          }}
        >
          <span style={{ marginLeft: "50%" }}>or</span>
          <hr />
        </div>
        <div className="sign-with-container">
          <img src="/google-icon.png" alt="google" />
          <img src="/facebook-icon.png" alt="google" />
          <img src="/linkedin-icon.png" alt="google" />
          <img src="/twitter-icon.png" alt="google" />
        </div>
      </div>
      <div className="image-container">
        <img src="/Illustration.png" alt="Vector Image" className="img-fluid" />
      </div>
    </Container>
  );
};

export default LoginPage;
