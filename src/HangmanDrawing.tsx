
const HEAD = ()=>{
    return <div className="hangmandrawing__head" />
}
const BODY = ()=>{
    return <div className="hangmandrawing__body" />
}
const LEFTARM = ()=>{
    return <div className="hangmandrawing__leftarm" />
}
const RIGHTARM = ()=>{
    return <div className="hangmandrawing__rightarm" />
}
const LEFTLEG = ()=>{
    return <div className="hangmandrawing__leftleg" />
}
const RIGHTLEG = ()=>{
    return <div className="hangmandrawing__rightleg" />
}

  type HangmanDrawingProps = {
      numberofGuesses: number
  }

const HangmanDrawing = ({numberofGuesses}:HangmanDrawingProps)=>{
    return (
        <div className="container hangmandrawing">
            <div className="hangmandrawing__finalbar"/>
            <div className="hangmandrawing__topbar"/>
            {numberofGuesses >=1 ? <HEAD /> : null}
            {numberofGuesses >=2 ? <BODY /> : null}
            {numberofGuesses >=3 ? <LEFTARM /> : null}
            {numberofGuesses >=4 ? <RIGHTARM /> : null}
            {numberofGuesses >=5 ? <LEFTLEG /> : null}
            {numberofGuesses >=6 ? <RIGHTLEG /> : null}

            <div className="hangmandrawing__centerbar"/>
            <div className="hangmandrawing__bottombar"/>
        </div>
    )
}

export default HangmanDrawing