const {useTranslation} = require("react-i18next");
const React = require("react");


export default function ChangeLocalization() {
    const {i18n} = useTranslation();

    const changeDefaultLanguage = async (language) => {
        await i18n.changeLanguage(language);
    };

    return (
        <>
            <button onClick={() => changeDefaultLanguage("en")}>EN</button>
            <button onClick={() => changeDefaultLanguage("ru")}>RU</button>
        </>
    )
}
