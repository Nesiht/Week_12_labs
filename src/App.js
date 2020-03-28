import React from 'react'
import { Card } from 'components/Card'

export const App = () => {

  const settings = [
    { title: 'Lemon',
      titleColor: '#166F39',
      subTitle: 'This is a really tasty fruit.',
      subTitleColor: '#000000',
      emoji: '🍋',
      primeColor: '#8CFFBA' ,
      secondColor: '#CFFFE2',
      btnColor: '#FCED84',
      btnTextColor: '#000000',
      btnText: 'order now' },
    { title: 'Rocket',
      titleColor: '#0B0C11',
      subTitle: 'Join us into the outer space!',
      subTitleColor: '#0B0C11',
      emoji: '🚀' ,
      primeColor: '#A6CFE2',
      secondColor: '#C2DCE9',
      btnColor: '#0B0C11',
      btnTextColor: '#FFD600',
      btnText: 'book seat' },
    { title: 'Doggy',
      titleColor: '#502F7E',
      subTitle: 'This is a really tasty fruit.',
      subTitleColor: '#502F7E',
      emoji: '🐶',
      primeColor: '#EEB200' ,
      secondColor: '#FFE086' ,
      btnColor: '#FFFFFF' ,
      btnTextColor: '#502F7E' ,
      btnText: 'adopt me'}]


  return (
    <section className='container'>
      {settings.map((item) => {
        return (
          <Card 
            title={item.title}
            titleColor={item.titleColor}
            subTitle={item.subTitle}
            subTitleColor={item.subTitleColor}
            emoji={item.emoji}
            primeColor={item.primeColor}
            secondColor={item.secondColor}
            btnColor={item.btnColor}
            btnTextColor={item.btnTextColor}
            btnText={item.btnText}
          />
        )
      })}
    </section>
  )
}
