import { zodResolver } from "@hookform/resolvers/zod"
import hslToHex from "hsl-to-hex"
import { Pipette } from "lucide-react"
import { type FC, useContext } from "react"
import { HexColorPicker } from "react-colorful"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { CustomThemeContext } from "@/components/providers/theme-provider"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { getCustomThemeVariables, hexToHsl } from "@/lib/utils"

const customizeThemeFormSchema = z.object({
  variables: z.array(
    z.object({
      key: z.string(),
      /** Value must be a hsl color */
      value: z.string().optional(),
      label: z.string()
    })
  )
})

export type CustomizeThemeFormSchema = z.infer<typeof customizeThemeFormSchema>

type Variable = {
  key: string
  label: string
}
const variables: Variable[] = [
  {
    key: "background",
    label: "Фон"
  },
  {
    key: "foreground",
    label: "Текст"
  },
  {
    key: "primary",
    label: "Основной"
  },
  {
    key: "primary-foreground",
    label: "Основной текст"
  },
  {
    key: "secondary",
    label: "Второстепенный"
  },
  {
    key: "secondary-foreground",
    label: "Второстепенный текст"
  },
  {
    key: "muted",
    label: "Темный"
  },
  {
    key: "muted-foreground",
    label: "Темный текст"
  },
  {
    key: "border",
    label: "Граница"
  }
]

export const CustomizeTheme: FC = () => {
  const { setVariables } = useContext(CustomThemeContext)
  const form = useForm<CustomizeThemeFormSchema>({
    resolver: zodResolver(customizeThemeFormSchema),
    defaultValues: {
      variables: getCustomThemeVariables()
    }
  })

  const { fields, append, replace } = useFieldArray({
    control: form.control,
    name: "variables"
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(({ variables }) => {
          // TODO: add color theme context
          // setColorTheme("custom")
          setVariables(variables)

          localStorage.setItem(
            "customThemeVariables",
            JSON.stringify(variables)
          )
        })}
        className="flex flex-col items-end gap-4"
      >
        <FormField
          name="variables"
          control={form.control}
          render={() => (
            <FormItem className="grid w-full grid-cols-1 gap-3 space-y-0 min-[500px]:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {variables.map((variable, i) => {
                let color = ""
                const currentField = fields.find(f => f.key === variable.key)

                const [h, s, l] =
                  currentField?.value
                    ?.replaceAll("%", "")
                    .split(" ")
                    .map(Number) ?? []
                if (h && s && l) {
                  color = hslToHex(h, s, l)
                }

                return (
                  <div key={i} className="flex flex-col gap-1">
                    <Label>{variable.label}</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className="w-full gap-1.5"
                          size="sm"
                          variant="outline"
                        >
                          <Pipette size={16} /> Выбрать цвет
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="flex w-[calc(200px+1rem*2+2rem)] flex-col items-center gap-6">
                        <HexColorPicker
                          color={color}
                          onChange={newColor => (color = newColor)}
                        />
                        <Button
                          className="w-full"
                          variant="secondary"
                          onClick={() => {
                            if (fields.some(f => f.key === variable.key)) {
                              return replace({
                                ...variable,
                                value: hexToHsl(color)!
                              })
                            }
                            return append({
                              ...variable,
                              value: hexToHsl(color)!
                            })
                          }}
                        >
                          Применить
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </div>
                )
              })}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Применить</Button>
      </form>
    </Form>
  )
}
