
export default function ContentfulTest() {
    return (
      <div>
        <h1>Messages</h1>       
      </div>
    )
}

const contentful = require("contentful");

const client = contentful.createClient({
  space: "fzwk2xh0k7xd",
  accessToken: "Q23CSlyV-qu0cpn4kaiGUHjadwRnnW9E3I7L7_MNVDs"
});

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)



