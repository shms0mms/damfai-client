import { User } from "lucide-react"

export function Heading() {
  return (
    <section className="bg-transparent py-24 sm:py-32">
      <div className="container relative px-6 lg:px-8">
        <div className="mb-20 mr-auto max-w-2xl text-left">
          <h2 className="mb-20 text-4xl font-semibold tracking-tighter text-foreground/70 sm:text-6xl">
            Что говорят другие
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Damfai — просто находка! Я обожаю Чаппи, который не только помогает
            читать, но и объясняет сложные моменты, как будто сидишь на уроке с
            другом. Аналитика здесь тоже суперполезная: приятно видеть свой
            прогресс и сколько уже прочитал. Я читаю больше, чем когда-либо!
          </p>
          <hr className="border-1 mt-10 w-[70vw] border-t" />
        </div>
        <div
          className="absolute left-0 top-0 h-80 w-[90%] overflow-x-hidden bg-[rgb(54,157,253)] bg-opacity-40 opacity-55 blur-[337.4px]"
          style={{ transform: "rotate(-30deg)" }}
        />
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-400">
                <p>
                  Чаппи — мой новый лучший помощник! С Damfai я впервые нашёл
                  книги по настроению и эмоциям — подход к чтению стал таким
                  личным и увлекательным. А еще мне нравится видеть свои
                  достижения и статистику, это мотивирует читать больше.
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <User className="h-9 w-9" />
                <div className="text-base">
                  <div className="font-semibold text-muted-foreground">
                    Миша Сеньков
                  </div>
                  <div className="mt-1 text-gray-500">Музыкант</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-400">
                <p>
                  Damfai — это чтение на новом уровне. Умный ассистент Чаппи
                  помогает понимать текст глубже, чем когда читаешь один. А
                  когда можно сразу выбрать книгу под настроение и следить за
                  прогрессом — это вообще лучший сервис для тех, кто хочет
                  развиваться и читать с интересом.
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <User className="h-9 w-9" />
                <div className="text-base">
                  <div className="font-semibold text-muted-foreground">
                    Владислав Ляшенко
                  </div>
                  <div className="mt-1 text-gray-500">Разработчик Игр</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
