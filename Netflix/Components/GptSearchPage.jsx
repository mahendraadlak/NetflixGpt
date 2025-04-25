import React from 'react'
import { useSelector } from 'react-redux'

function GptSearchPage() {
    const lang = {
       en:{
          search: "Search",
          langPlaceholder : "Enter the movie name you want to watch"
        },
        hindi:{
        search: "खोज",
        langPlaceholder: "वह फिल्म का नाम दर्ज करें जिसे आप देखना चाहते हैं"
        },
        spanish:{
            search: "Buscar",
            langPlaceholder: "Introduce el nombre de la película que deseas ver"
        }
}

const selectLang = useSelector(store=>store.config.initialLang);



  return (
    <div className='searchinput-page'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <form>
                        <input placeholder={lang[selectLang].langPlaceholder}/>
                        <button>{lang[selectLang].search}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GptSearchPage