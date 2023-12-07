import languageConfig from "./language.json";

const I18n = (keyword) =>{
    const lnaguage = localStorage.getItem("language") || "en";
    // const language = "en";
  return  languageConfig[lnaguage][keyword];

}


export default I18n;