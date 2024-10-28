import { Gift } from "lucide-react"
import { ICON_MAP } from "@/types/pass"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CardWrapper } from "./card-wrapper"
import { passService } from "@/services/pass.service"

export async function CurrentQuestsCard() {
  const data = await passService.getQuests()
  return (
    <CardWrapper
      title={"Текущие квесты"}
      className="col-span-1"
      subtitle={"Просмотрите текущих квестов на сегодня"}
    >
      <ul className="flex max-h-[380px] flex-col gap-5 overflow-auto">
        {data?.length
          ? [...data, ...data].map(d => {
              const Icon = ICON_MAP[d.icon]
              return (
                <li
                  key={d.id}
                  className="flex items-center gap-5 border-b border-solid pb-3"
                >
                  <div className="flex w-full items-center gap-5">
                    <Icon className="min-h-[16px] min-w-[16px]" />
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-3">
                        <h2 className="truncate">{d.title}</h2>
                        <Progress
                          value={(d.progress / d.total) * 100}
                          className="h-1 min-w-[80px] max-w-[80px] max-md:hidden"
                        />
                        <p className="whitespace-nowrap text-sm text-muted-foreground">
                          {d.progress} / {d.total}
                        </p>
                      </div>
                      <p>{d.description}</p>
                    </div>
                  </div>
                  <Button
                    disabled={d.progress >= d.total}
                    size={"icon"}
                    variant="outline"
                  >
                    <Gift size={14} />
                  </Button>
                </li>
              )
            })
          : null}
      </ul>
    </CardWrapper>
  )
}
