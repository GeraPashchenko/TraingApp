const React = require("react");
const {Form, FormFieldDiv, LabelField, InputForm, FormHeader, FormButton} = require("./Styled-Component");
const {withTranslation} = require("react-i18next");
const Localization = require("../../Utils/Localization");

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyTypes: []
        };
        this.setState = this.setState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const user = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            age: event.target.age.value,
            email: event.target.email.value,
            bodyType: localStorage.getItem('BodyType') || "Undefined",
            password: event.target.password.value
        }

        fetch(`http://localhost:8000/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(responce => {
            return responce.json()
        }).then(data => {
            alert(data)
            if (data.error != null) {
                throw new Error(data.error);
            } else {
                localStorage.setItem('user', JSON.stringify({...data.user}));
            }
        }).catch(err => alert("Error: " + err.message));
    }

    render() {
        return (
            <>
                <Localization/>

                <Form onSubmit={this.handleSubmit}>
                    <FormHeader> {this.props.t('registerForm.header')} </FormHeader>

                    <FormFieldDiv>
                        <LabelField> {this.props.t('registerForm.firstName')} </LabelField>
                        <InputForm name="firstName" required/>
                    </FormFieldDiv>

                    <FormFieldDiv>
                        <LabelField> {this.props.t('registerForm.lastName')} </LabelField>
                        <InputForm name="lastName" required/>
                    </FormFieldDiv>

                    <FormFieldDiv>
                        <LabelField> {this.props.t('registerForm.age')} </LabelField>
                        <InputForm type="number" min={10} max={100} name="age" required/>
                    </FormFieldDiv>

                    <FormFieldDiv>
                        <LabelField> {this.props.t('registerForm.email')} </LabelField>
                        <InputForm name="email" type={'email'} required/>
                    </FormFieldDiv>

                    <FormFieldDiv>
                        <LabelField> {this.props.t('registerForm.password')} </LabelField>
                        <InputForm name="password" required/>
                    </FormFieldDiv>

                    <FormButton type='submit'> {this.props.t('registerForm.submit')} </FormButton>

                </Form>
            </>
        )
    }
}

export default withTranslation()(RegisterForm);