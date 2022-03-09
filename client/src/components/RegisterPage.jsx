import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { registerCall } from "../apiCalls";
import { Form, Button, Row, Col } from 'react-bootstrap'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
// import Languages from './Languages';
// import Level from './Level';


const Register = () => {
  const { dispatch } = useContext(AuthContext);
  const { state } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    languages: [],
    bio: "",
    github: "",
  });

  const { name, email, password, password2, languages, bio, github } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

 
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
        languages,
        bio,
        github,
      };
      console.log(userData)
      registerCall(userData, dispatch); //calls api in separate file
    }
  };

  const [nameValue] = useState();
  const [emailValue] = useState();
  const [passwordValue] = useState();
  const [confirmpasswordValue] = useState();
  const [languagesValue] = useState();
  const [bioValue] = useState();
  const [githubValue] = useState();

  const languageList = ['JavaScript', 'Ruby', 'Python']
  

  return (
    <>
      <div className="sml-banner-image">
        <div className="dark-grey-bg white-text full-width">
          <h1 className="varela" data-testid="register text">
            Sign Up Here
          </h1>
          <h3 className="courier" data-testid="register phrase">
            You'll be Pair Programming in no time!
          </h3>
        </div>
      </div>

      <Row className="full-width">
      <Col></Col>
        <Col xs={6}>
          <Form onSubmit ={onSubmit}>
          <Form.Group data-testid="name input" className="form-group mb-3" controlId="formBasicEmail">
            <Form.Label className="white-bg">Name</Form.Label>
            <Form.Control 
              type="text" 
              id='name'
              name='name'
              value={nameValue}
              placeholder='Enter your name' 
              onChange={onChange} />
            <Form.Text className="text-muted white-bg">
              This will be displayed on your profile page.
            </Form.Text>
          </Form.Group>

          <Form.Group data-testid="email input" className="form-group mb-3" controlId="formBasicEmail">
            <Form.Label className="white-bg">Email address</Form.Label>
            <Form.Control 
              type="email" 
              id='email'
              name='email'
              value={emailValue}
              placeholder='Enter your email' 
              onChange={onChange} 
              />
            <Form.Text className="text-muted white-bg">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group cdata-testid="password input" className="form-group mb-3" controlId="formBasicPassword">
            <Form.Label className="white-bg">Password</Form.Label>
            <Form.Control 
              type="password" 
              id='password'
              name='password'
              value={passwordValue}
              placeholder='Enter your password' 
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group cdata-testid="confirm password input" className="form-group mb-3" controlId="formBasicPassword">
            <Form.Label className="white-bg">Password</Form.Label>
            <Form.Control 
              type="password" 
              id='password2'
              name='password2'
              value={confirmpasswordValue}
              placeholder='Confirm your password' 
              onChange={onChange}
            />
          </Form.Group>

          {/* <Form.Group data-testid="languages input" className="form-group mb-3" controlId="formBasicEmail">
            <Form.Label className="white-bg">Languages</Form.Label>
            <Form.Control 
              type="text" 
              id='languages'
              name='languages'
              value={languagesValue}
              placeholder='What languages do you use or are learning?' 
              onChange={onChange} />
          </Form.Group> */}

          <DropdownMultiselect
            options={languageList}
            id='languages'
            name='languages'
            value={languagesValue}
            placeholder='What languages do you use or are learning?' 
            handleOnChange={(selected) => {
              setFormData((prevState) => ({
                ...prevState,
                languages: selected
              }))
            }}
          />


          <Form.Group data-testid="bio input" ClassName="form-group mb-3" controlId="formBasicEmail">
            <Form.Label className="white-bg">Bio</Form.Label>
            <Form.Control 
              type="text" 
              id='bio'
              name='bio'
              value={bioValue}
              placeholder='Tell everyone a bit about yourself' 
              onChange={onChange} />
          </Form.Group>

          <Form.Group data-testid="github input" className="form-group mb-3" controlId="formBasicEmail">
            <Form.Label className="white-bg">Github</Form.Label>
            <Form.Control 
              type="text" 
              id='github'
              name='github'
              value={githubValue}
              placeholder='Add GitHub account user name eg. pair-pro' 
              onChange={onChange} />
          </Form.Group>

          {/* <Languages  languagesValue={languagesValue}/>
          <Level /> */}
          <Button variant="primary" type="submit" data-testid="add-btn">
          Join
          </Button>
        </Form>
        <br></br>
        </Col>
        <Col></Col>
      </Row>
</>
  );
};

export default Register;
