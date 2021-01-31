const {withTranslation} = require("react-i18next");
const React = require("react");
const {Form, FormButton, FormFieldDiv, FormHeader, InputForm, LabelField} = require("./Styled-Component");
const Localization = require("../../Utils/Localization");

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        fetch(`http://localhost:8000/signIn`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(responce => {
            return responce.json()
        }).then(data => {
            if (data.error != null) {
                throw new Error(data.error);
            } else {
                localStorage.setItem('user', JSON.stringify({...data}));
            }
        }).catch(err => alert("Error: " + err.message));
    }

    render() {
        return (
            <>
                <Localization/>
                <Form onSubmit={this.handleSubmit}>
                    <FormHeader> {this.props.t('signInForm.header')} </FormHeader>

                    <FormFieldDiv>
                        <LabelField> {this.props.t('signInForm.email')} </LabelField>
                        <InputForm name="email" required/>
                    </FormFieldDiv>

                    <FormFieldDiv>
                        <LabelField> {this.props.t('signInForm.password')} </LabelField>
                        <InputForm name="password" required/>
                    </FormFieldDiv>

                    <FormButton type='submit'> {this.props.t('signInForm.submit')} </FormButton>
                </Form>
            </>

        )
    }
}

export default withTranslation()(SignIn);