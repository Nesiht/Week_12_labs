/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import 'components/card.css'
import 'components/cardevolved.css'

export const Card = (props) => {
  const { title, titleColor, subTitle, subTitleColor, emoji, primeColor, secondColor, btnColor, btnTextColor, btnText } = props
  const [clicked, setClicked] = useState(false)

  return (
    <article className="card">
      {clicked === false &&
      <>
        <div className="cardTopSection" style={{ backgroundColor: `${primeColor}` }}>
          <h1 className="cardTitle" style={{ color: `${titleColor}` }}>{title}</h1>
          <span className="cardEmoji">{emoji}</span>
        </div>

        <div className="cardBottomSection" style={{ backgroundColor: `${secondColor}` }}>
          <p className="cardSubTitle" style={{ color: `${subTitleColor}` }}>{subTitle}</p>
          <button className="cardButton" style={{ backgroundColor: `${btnColor}`, color: `${btnTextColor}` }} onClick={() => setClicked(true)}>
            {btnText.toUpperCase()}
          </button>
        </div>
      </>
      }
      {clicked === true &&
        <>
          <div className="cardTopSectionEvolved" style={{ backgroundColor: `${primeColor}` }}>
            <h1 className="cardTitle" style={{ color: `${titleColor}` }}>{title}</h1>
          </div>

          <div className="cardBottomSectionEvolved" style={{ backgroundColor: `${secondColor}` }}>
            <span className="cardEmoji">{emoji}</span>
          </div>
        </>
      }
    </article>

  )
}