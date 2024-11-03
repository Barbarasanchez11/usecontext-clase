import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
 const {Language, changeLanguage} = useLanguage()

 const handleChangeLanguages = (e) => {
    changeLanguage(e.target.value)
 }

 return(
    <>
    <label>Select Language: </label>
    <select value={Language} onChange={handleChangeLanguages}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
    </select>
    </>
 )
}

export default LanguageSelector