const React  = require( "react");
const Localization  = require( "../../Utils/Localization");
const { withTranslation}  = require( 'react-i18next');
const {BodyTypesDiv}  = require( "./Styled-Component");
const BodyTypes  = require( "./Body-types");

class Register1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyTypes: []
        };
        this.setState = this.setState.bind(this);
    }

    render() {
        const types = ["Ectomorph", "Mesomorph", "Endomorph"];

        return (
            <>
                <Localization/>
                <BodyTypesDiv>
                    {types.map(bodyType=>{
                        return <BodyTypes bodyType={bodyType}/>
                    })}
                </BodyTypesDiv>
            </>
        )
    }
}

export default withTranslation()(Register1);