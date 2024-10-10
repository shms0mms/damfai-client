import type { Book, Chapter, Page } from "@/types/book"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"
import { books } from "@/components/blocks/bento"
import { randomNumber } from "@/lib/utils"
import type { Pagination } from "@/types"

type GetAllGanresResponse = {
  id: number
  ganre: string
}[]

type GetAllBooksOptions = {
  page: number
  size: number
  filters?: Record<string, string>
}
type GetAllChaptersResponse = {
  title: string
  author: string
  chapters: Chapter[]
}

const mockGanres = [
  "Фэнтези",
  "Романтика",
  "Психологическое",
  "Вам может понравиться",
  "Затягивает с первой главы",
  "Суперхиты",
  "Комиксы"
]
const mockBookImages = [
  "https://api.bookmate.ru/assets/books-covers/cf/22/Bg3mdZVe-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/fc/3b/dlAQzzzK-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/41/d1/ApOv8ISe-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/2c/57/kE83yj2S-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/99/03/cfhkKhXr-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/45/18/lWdpqqMs-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/6c/db/ZsSrVuO7-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/90/af/xKQuo2ek-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/b1/e9/rjnABPr7-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/8a/cc/uekQYMDS-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/42/98/UTFfdSJP-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/04/f9/iQXPvjl2-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/5f/5a/INX13int-ipad.png",
  "https://api.bookmate.ru/assets/books-covers/6b/da/rVhzDNv1-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/e7/a4/cQjRAdcw-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/50/75/vUbfSEtM-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/3d/8f/Qjxqdti4-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/33/58/mqKj8LwN-ipad.jpeg"
]

class BookService {
  private BASE_URL = "/books"
  async getAllGanres() {
    const response = await new Promise<GetAllGanresResponse>(res =>
      res([{ id: 1, ganre: "Фэнтези" }])
    )
    return response.map(r => r.ganre)
  }
  async getById(id: number) {
    return new Promise<Book>(res =>
      res({
        id: 1,
        title: books[randomNumber(0, books.length - 1)!]!.title,
        author: books[randomNumber(0, books.length - 1)!]!.author,
        writen_date: new Date(),
        chapters: 100 + 1,
        desc: books[randomNumber(0, books.length - 1)!]!.body,
        ratings: Math.random() * 5,
        ganres: [mockGanres[randomNumber(0, mockGanres.length - 1)]!],
        image: mockBookImages[randomNumber(0, mockBookImages.length - 1)],
        progress: 10.01
      })
    )
  }
  async getAll(options: GetAllBooksOptions) {
    const queryParams = new URLSearchParams({
      page: `${options.page}`,
      size: `${options.size}`,
      ...options.filters
    }).toString()

    const response = await axiosDefault.post<Pagination<Book>>(
      `${this.BASE_URL}?${queryParams}`,
      []
    )
    return response.data
  }
  async getUserBooks() {
    return new Promise<Book[]>(res =>
      res(
        new Array(10).fill(null).map((_, i) => ({
          id: i + 1,
          title: books[randomNumber(0, books.length - 1)!]!.title,
          author: books[randomNumber(0, books.length - 1)!]!.author,
          writen_date: new Date(),
          chapters: randomNumber(0, 500),
          desc: books[randomNumber(0, books.length - 1)!]!.body,
          ratings: Math.random() * 5,
          ganres: [mockGanres[randomNumber(0, mockGanres.length - 1)]!],
          image: mockBookImages[randomNumber(0, mockBookImages.length - 1)],
          progress: 100.0
        }))
      )
    )
  }
  async startReading(options: { id: number; dates: [Date, Date] }) {
    return true
  }
  async getAllChapters(id: number) {
    return (
      await axiosDefault.get<GetAllChaptersResponse>(
        `${this.BASE_URL}/chapters/${id}`
      )
    ).data
    // return new Promise<GetAllChaptersResponse>(res =>
    //   res({
    //     title: "Идиот",
    //     author: "Достоевский",
    //     chapters: [
    //       {
    //         id: 1,
    //         title: "Chapter 1",
    //         numberOfChapter: 1,
    //         pages: 10
    //       },
    //       {
    //         id: 2,
    //         title: "Chapter 2",
    //         numberOfChapter: 2,
    //         pages: 5
    //       }
    //     ]
    //   })
    // )
  }
  async getPagesByChapterId(options: {
    chapterId: number
    page: number
    size: number
  }) {
    return (
      await axiosWithAuth.get<Pagination<Page>>(
        `${this.BASE_URL}/get_pages_by_chapter/${options.chapterId}?page=${options.page}&size=1`
      )
    ).data
    //     return new Promise<Pagination<Page>>(res =>
    //       res({
    //         items: new Array(10).fill(null).map<Page>((_, i) => ({
    //           id: i,
    //           numberOfPage: i + 1,
    //           text: `
    // Конец 1867 года. Князь Лев Николаевич Мышкин приезжает в Петербург из Швейцарии. Ему двадцать шесть лет, он последний из знатного дворянского рода, рано осиротел, в детстве заболел тяжёлой нервной болезнью и был помещён своим опекуном и благодетелем Павлищевым в швейцарский санаторий. Там он прожил четыре года и теперь возвращается в Россию с неясными, но большими планами послужить ей. В поезде князь знакомится с Парфеном Рогожиным, сыном богатого купца, унаследовавшим после его смерти огромное состояние. От него князь впервые слышит имя Настасьи Филипповны Барашковой, любовницы некоего богатого аристократа Тоцкого, которой страстно увлечён Рогожин.

    // По приезде князь со своим скромным узелком отправляется в дом генерала Епанчина, дальним родственником жены которого, Елизаветы Прокофьевны, является. В семье Епанчиных три дочери — старшая Александра, средняя Аделаида и младшая, общая любимица и красавица Аглая. Князь поражает всех непосредственностью, доверчивостью, откровенностью и наивностью, настолько необычайными, что поначалу его принимают очень настороженно, однако с все большим любопытством и симпатией. Обнаруживается, что князь, показавшийся простаком, а кое-кому и хитрецом, весьма неглуп, а в каких-то вещах по-настоящему глубок, например, когда рассказывает о виденной им за границей смертной казни. Здесь же князь знакомится и с чрезвычайно самолюбивым секретарём генерала Ганей Иволгиным, у которого видит портрет Настасьи Филипповны. Её лицо ослепительной красоты, гордое, полное презрения и затаённого страдания, поражает его до глубины души.

    // Узнает князь и некоторые подробности: обольститель Настасьи Филипповны Тоцкий, стремясь освободиться от неё и вынашивая планы жениться на одной из дочерей Епанчиных, сватает её за Ганю Иволгина, давая в качестве приданого семьдесят пять тысяч. Ганю манят деньги. С их помощью он мечтает выбиться в люди и в дальнейшем значительно приумножить капитал, но в то же время ему не даёт покоя унизительность положения. Он бы предпочёл брак с Аглаей Епанчиной, в которую, может быть, даже немного влюблён (хотя и тут тоже его ожидает возможность обогащения). Он ждёт от неё решающего слова, ставя от этого в зависимость дальнейшие свои действия. Князь становится невольным посредником между Аглаей, которая неожиданно делает его своим доверенным лицом, и Ганей, вызывая в том раздражение и злобу.

    // Между тем князю предлагают поселиться не где-нибудь, а именно в квартире Иволгиных. Не успевает князь занять предоставленную ему комнату и перезнакомиться со всеми обитателями квартиры, начиная с родных Гани и кончая женихом его сестры молодым ростовщиком Птицыным и господином непонятных занятий Фердыщенко, как происходят два неожиданных события. В доме внезапно появляется не кто иной, как Настасья Филипповна, приехавшая пригласить Ганю и его близких к себе на вечер. Она забавляется, выслушивая фантазии генерала Иволгина, которые только накаляют атмосферу. Вскоре появляется шумная компания с Рогожиным во главе, который выкладывает перед Настасьей Филипповной восемнадцать тысяч. Происходит нечто вроде торга, как бы с её насмешливо-презрительным участием: это её-то, Настасью Филипповну, за восемнадцать тысяч? Рогожин же отступать не собирается: нет, не восемнадцать — сорок. Нет, не сорок — сто тысяч!..

    // Для сестры и матери Гани происходящее нестерпимо оскорбительно: Настасья Филипповна — продажная женщина, которую нельзя пускать в приличный дом. Для Гани же она — надежда на обогащение. Разражается скандал: возмущённая сестра Гани Варвара Ардалионовна плюёт ему в лицо, тот собирается ударить её, но за неё неожиданно вступается князь и получает пощёчину от взбешённого Гани. «О, как вы будете стыдиться своего поступка!» — в этой фразе весь князь Мышкин, вся его бесподобная кротость. Даже в эту минуту он сострадает другому, пусть даже и обидчику. Следующее его слово, обращённое к Настасье Филипповне: «Разве вы такая, какою теперь представлялись», станет ключом к душе гордой женщины, глубоко страдающей от своего позора и полюбившей князя за признание её чистоты.`
    //         })),
    //         total: 10,
    //         page: 1,
    //         size: 10,
    //         pages: 1
    //       })
    //     )
  }
}

export const bookService = new BookService()
