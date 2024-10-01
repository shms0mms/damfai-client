"use client"

import React from "react"
import { LayoutGrid } from "../ui/layout-grid"

export function BooksLayout() {
  return (
    <div className="h-[130vh] w-full py-20">
      <LayoutGrid cards={cards} />
    </div>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Александр Сергеевич Пушкин
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Александр Сергеевич Пушкин – выдающийся русский поэт, писатель и
        драматург, основатель современного русского литературного языка. Родился
        в 1799 году, учился в Царскосельском лицее. Известен такими
        произведениями, как «Евгений Онегин», «Руслан и Людмила», «Капитанская
        дочка», «Пиковая дама» и многими другими. Поддерживал декабристов и
        погиб на дуэли в 1837 году.
      </p>
    </div>
  )
}
const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Владимир Владимирович Маяковский
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Владимир Владимирович Маяковский – выдающийся русский поэт, драматург и
        художник, один из ярких представителей русского футуризма. Родился в
        1893 году в селе Багдати (ныне город Багдати в Грузии). С юности
        увлекался литературой и искусством. В 1911 году приехал в Москву, где
        присоединился к группе футуристов. В своих произведениях Маяковский
        экспериментировал с формой, языком и темами, стремясь выразить дух
        нового времени. Среди его наиболее известных работ – поэмы «Облако в
        штанах», «Флейта-позвоночник», «Про это», а также пьесы «Клоп» и «Баня».
        Маяковский также активно занимался графическим дизайном и рекламой.
        Трагически ушел из жизни в 1930 году, покончив с собой.
      </p>
    </div>
  )
}
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Фёдор Михайлович Достоевский
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Фёдор Михайлович Достоевский – выдающийся русский писатель, философ и
        мыслитель. Родился в 1821 году в Москве. С детства увлекался литературой
        и философией. В 1849 году был арестован и приговорен к смертной казни за
        участие в революционном кружке Петрашевского, однако в последний момент
        казнь была заменена на ссылку в Сибирь. Этот опыт сильно повлиял на его
        мировоззрение и творчество.
      </p>
    </div>
  )
}
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">Евгений Онегин</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Роман Александра Сергеевича Пушкина «Евгений Онегин» – это одно из самых
        известных произведений русской литературы, которое стало классикой
        мировой литературы. Это роман в стихах, написанный в начале XIX века.
      </p>
    </div>
  )
}
const SkeletonFive = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Герой нашего времени
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Роман Михаила Юрьевича Лермонтова «Герой нашего времени» – это
        произведение, в котором автор описывает внутренний мир и душевные
        терзания главного героя Печорина. Роман состоит из нескольких частей,
        каждая из которых представляет собой дневниковые записи или письма
        самого Печорина.
      </p>
    </div>
  )
}
const SkeletonSix = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">Идиот</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Роман Фёдора Михайловича Достоевского «Идиот» – это глубокое
        исследование человеческих характеров и сложных социальных отношений.
        Главный герой романа – князь Лев Николаевич Мышкин, возвращается в
        Россию после лечения в швейцарской клинике. Он оказывается в центре
        запутанных интриг, сталкиваясь с разными типами людей: от благородных и
        честных до жадных и корыстных.
      </p>
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "https://avatars.mds.yandex.net/get-entity_search/2005770/960612418/S600xU_2x"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://avatars.mds.yandex.net/get-entity_search/5578840/978824533/S600xU_2x"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://avatars.mds.yandex.net/get-entity_search/5396253/952755728/S600xU_2x"
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "https://avatars.mds.yandex.net/get-entity_search/2037212/483113443/S600xU_2x"
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "https://avatars.mds.yandex.net/i?id=18c7b5e3d4d5d4e85442738d9a2830c5a0848ab9-4572087-images-thumbs&n=13"
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "https://avatars.mds.yandex.net/i?id=25daba300ba14e2ea068505448065bd9_l-5234557-images-thumbs&n=13"
  }
]
