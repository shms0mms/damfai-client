import { type Extension } from "@/types/shop"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"

class ExtensionsService {
  private BASE_URL = "/extensions"
  async getAll() {
    return await axiosDefault.get<Extension[]>(`${this.BASE_URL}/all`)
  }
  async getById(extensionId: string) {
    return await axiosDefault.get<Extension>(`${this.BASE_URL}/${extensionId}`)
  }
  async getUserExtensions() {
    return await axiosWithAuth.get<Extension[]>(
      `${this.BASE_URL}/user/extensions`
    )
  }
}

export const extensionsService = new ExtensionsService()
