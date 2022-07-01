import Dexie from "dexie";
class SubClassedDexie extends Dexie {
  constructor() {
    super("chcks");
    this.version(1).stores({
      chcks: "++id, templateId, createdAt, modifiedAt, title"
    });
  }
}
const db = new SubClassedDexie();
export { db as d };
