export type Section = {
    sectionTitle: String,
    items: {
        entry: String,
        detail: String,
        done: boolean
    }[]
}

export type Template = {
    id: String,
    title: String,
    description: String | null,
    version: Number,
    contents: Section[]
}

export type Chck = {
    id?: Number,
    templateId: String,
    templateVersion: Number,
    createdAt: Date,
    modifiedAt: Date,
    title: String,
    contents: Section[]
}