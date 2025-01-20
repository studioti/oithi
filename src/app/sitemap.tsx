import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const API_CASES = `${process.env.NEXT_PUBLIC_API_URL}sites`

    const response = await fetch(API_CASES)
    const data = await response.json()
    const result = data.cases
    const sites:any = Object.values(result)

    const cases: MetadataRoute.Sitemap = sites.map( (item:any, index:any) => {
        index += 1
        return {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}cases/${index}`,
            images: [`${process.env.NEXT_PUBLIC_BASE_URL}sites/bg-${item['nome']}.jpg`],
            lastModified: new Date(),
            priority: .9,
        }
    })

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            images: [`${process.env.NEXT_PUBLIC_BASE_URL}thumb.jpg`],
            priority: 1,
        },
        ...cases
    ]
}