
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