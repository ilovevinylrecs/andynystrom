import Link from 'next/link'


export default function Post({ date, image, title }) {
    let { file, description } = image
  
    return (
      <div className="post">
        <Link href="{url}">
          <a><img alt={description} src={`https:${file.url}`} />
          </a>
        </Link>
        <div className="text">
          <h2>{title}</h2>
          <h3>{date.substring(0, 10)}</h3>
        </div>
          
  
        <style jsx>{`
          .post {
            position: relative;
            margin: 10px;
            width: 300px;
            color: white;
            cursor: pointer;
          }
          .description {
            position: absolute;
            top: 0;
            padding: 10px;
            box-sizing: border-box;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 100%);
            height: 100px;
            opacity: 0;
            transition: opacity 0.5s;
          }
          .text {
            position: absolute;
            bottom: 0px;
            padding: 20px 0px 5px 10px;
            box-sizing: border-box;
            width: 100%;
            height: 70px;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0) 100%);
          }
          h2,
          h3 {
            margin: 5px;
          }
          h2 {
            margin-bottom: 0;
            font-size: 12px;
          }
          h3 {
            margin-top: 0;
            font-size: 10px;
            font-weight: 400;
          }
          img {
            width: 100%;
            max-width: 300px;
            height: auto;
          }
        `}</style>
      </div>
    )
  }
  