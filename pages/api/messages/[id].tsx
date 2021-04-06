import * as contentful from 'contentful'


export default async function handler(req, res) {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
    const { id } = req.query
    
    const entry = await client.getEntry(id);
    res.json(entry)
}

