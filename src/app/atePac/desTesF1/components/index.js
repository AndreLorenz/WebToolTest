import req from "../../../TasyApp/req";
export default req(require.context("./", true, /^(.*.(js$))[^.]*$/igm));