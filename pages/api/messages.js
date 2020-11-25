import * as contentful from 'contentful'


export default async (req, res) => {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const messages = await client.getEntries()
    res.json(messages.items)
}