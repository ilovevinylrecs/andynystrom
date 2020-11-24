import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const document = {
  nodeType: 'document',
  data: {},
  content: [
    {
      nodeType: 'paragraph',
      data: {},
      content: [
        {
          nodeType: 'text',
          value: 'Hello world!',
          marks: [],
          data: {}
        },
      ],
    },
  ],
};

console.log(documentToReactComponents(document)); // -> <p>Hello world!</p>


export default function Vinyl() {
    return (
      <div>
        <h1>Vinyl</h1>       
      </div>
    )
}

var Discogs = require('disconnect').Client;

var db = new Discogs().database();
db.getRelease(176126, function(err, data){
    console.log(data);
    
});