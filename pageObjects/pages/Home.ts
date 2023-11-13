import { Base } from "@pages/Base";

export class Home extends Base {
  async navigate() {
    await this.navigatePage({ url: "/" });
  }
}
