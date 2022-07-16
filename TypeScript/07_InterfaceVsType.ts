type TypeScriptAPI = string;

//Creating
interface Window {
  title: string;
}

//Modifying here
interface Window {
  ts: TypeScriptAPI;
}

//Creating
type WindowType = {
  title: string;
};

//Modifying here -> NOT POSSBLE
// type WindowType = {
//   title: TypeScriptAPI;
// };
