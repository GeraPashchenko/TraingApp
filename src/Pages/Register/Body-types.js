const React  = require( 'react');
const {BodyType, BodyTypeDifferencesList, TypesTitle, BodyTypeBttn}  = require( "./Styled-Component");
const {useTranslation}  = require( "react-i18next");
const { useHistory }  = require( "react-router-dom");

export default function BodyTypes(props) {
    const {bodyType} = props;
    const history = useHistory();
    const {t} = useTranslation();
    const bodyTypesDifferences = t(`bodyTypesDifferences.${bodyType}`, { joinArrays: ','}).split(',');
    const bodyTypeTitle = t(`bodyTypes.${bodyType}`);


    return (
        <BodyType>
            <TypesTitle>{bodyTypeTitle}</TypesTitle>
            <BodyTypeDifferencesList>
                {bodyTypesDifferences.map(diff => {
                    return <li>{diff}</li>
                })}
            </BodyTypeDifferencesList>
            <BodyTypeBttn onClick={()=>{
                localStorage.setItem("BodyType", bodyTypeTitle);
                history.push('/register2');
            }}>{t('chooseBodyType')}</BodyTypeBttn>
        </BodyType>
    )
}