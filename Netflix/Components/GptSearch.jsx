import { useDispatch, useSelector } from "react-redux";
import { toggleGpt } from "../store/gptSearchSlice";
import { langChange } from "../utils/constent";
import { configLang } from "../store/searchSlice";

function GptSearch() {
  const dispatch = useDispatch();

  const keyLang = useSelector(store=>store.gpt.gptSearch)

  function handleClickToggle() {
    dispatch(toggleGpt());
  }

  function handleChangeOption(e){
   console.log(e.target.value);
   dispatch(configLang(e.target.value))
  }
  return (
    <>
      {keyLang && (<select className="lang-select" onChange={handleChangeOption}>
        {langChange.map((item) => (
          <option key={item.keyIdentifier} value={item.keyIdentifier}>
            {item.value}
          </option>
        ))}
      </select>)}
      <button className="gpt-btn" onClick={handleClickToggle}>
        {keyLang ? "Home Page" : "Gpt Search"}
      </button>
    </>
  );
}

export default GptSearch;
