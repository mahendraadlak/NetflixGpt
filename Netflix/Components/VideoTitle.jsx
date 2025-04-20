import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className='title-header'>
    <h1>{title}</h1>
    <p>{overview}</p>
    <div className='bg-btns'><button>Play</button><button>More Info</button></div>
    </div>
  )
}

export default VideoTitle