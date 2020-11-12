import { fetchEntry } from '../../utils/contentfulPosts'


const Messages = ({ posts }) => {

  return (

      <div>
        <h1>Messages</h1>
        <div>
          {posts.map((p) => {
            return <MessagePost date={p.date} image={p.image.fields} title={p.title} />
          })}
        </div>
      </div>
  );

};

export default Messages;


export async function getStaticPaths() {

  const paths = [

    { params: {} }

  ];

  return { paths, fallback: false};

}

  
export async function getStaticProps(params) {
  
  const id = params.params.id;

  return {

    props: { id, name: "Andy" },

  };
}
