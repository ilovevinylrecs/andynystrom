import posts from '../../posts.json'


const Post = props => {
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.content}</p>
        </div>
    )
}

Post.getInitialProps = ({ query }) => {
    return {
        post: posts[query.id]
    }
}


// export async function getStaticProps({ params }) {
//     const id = params.id
//     const res = await fetchEntries()
//     const posts = await res.map((p) => {
//       return p.fields
//     })
  
//     return {
//       props: {
//         posts,
//       },
//     }
//   }



export default Post
