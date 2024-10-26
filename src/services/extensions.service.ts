import { type Extension } from "@/types/shop"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"

class ExtensionsService {
  private BASE_URL = "/extensions"
  async getAll() {
    return await axiosDefault.get<Extension[]>(`${this.BASE_URL}/all`)
  }
  async getById(extensionId: string) {
    return await axiosDefault.get<Extension>(
      `${this.BASE_URL}/by-id?id=${extensionId}`
    )
  }
  async getBySlug(slug: string) {
    return await axiosDefault.get<Extension>(
      `${this.BASE_URL}/by-slug?slug=${slug}`
    )
  }
  async getUserExtensions() {
    return await axiosWithAuth.get(`${this.BASE_URL}/user/extensions`)
  }
  async addExtensionToUser(extensionId: number) {
    return await axiosWithAuth.post(
      `${this.BASE_URL}/add/user/extensions/${extensionId}`
    )
  }
  async removeExtensionFromUser(extensionId: number) {
    return await axiosWithAuth.delete(
      `${this.BASE_URL}/remove/user/extensions/${extensionId}`
    )
  }
}

export const extensionsService = new ExtensionsService()
