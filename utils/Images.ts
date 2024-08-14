const WOODLAND_IMAGES_BASE_KEY = "https://assets.capcons.com/images/"

type IMAGES_ROUTES = "about" | "banners" | "email" | "landing_page" | "may2024" | "Summer" | "Winter"

export const GetConvertedUrl = <K extends string>(url: K): K => {
    return `${WOODLAND_IMAGES_BASE_KEY}/${url}` as K
}

const randomInt = (max: number): number => Math.floor(Math.random() * max);

export const GenerateImagePath = (type: string) => {
    return `___capcons___${randomInt(10000)}__.${type.match(/(?<=\/)[^\/]+/)?.[0] ?? "jpg"}`
}