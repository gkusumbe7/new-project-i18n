import languageConfig from "./language.json";

const I18n = (keyword ,placeholder , value) =>{
    const lnaguage = localStorage.getItem("language") || "en";

    const text = languageConfig[lnaguage][keyword]
    // const language = "en";
//   return  languageConfig[lnaguage][keyword];
if(placeholder && value){
    return text.replace(placeholder , value);
}
return text;
}


export default I18n;