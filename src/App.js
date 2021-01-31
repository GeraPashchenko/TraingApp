const React = require('react');
const { BrowserRouter , Route, Switch } = require("react-router-dom");
const Register1 = require("./Pages/Register/Register1");
const Register2 = require("./Pages/Register/Register2");
const SignIn = require("./Pages/Sign-In/Sign-In");
const CreateTraining = require("./Pages/Training/Create-Training");

function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/register1' component={Register1} />
          <Route exact path='/register2' component={Register2}/>
          <Route exact path='/signIn' component={SignIn}/>
          <Route exact path='/createTraining' component={CreateTraining}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;