import * as contentful from 'contentful'

export default async (req, res) => {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const posters = await client.getEntries({
        content_type: 'poster',
        order: 'fields.title'
    })

    res.json(posters.items)
}
