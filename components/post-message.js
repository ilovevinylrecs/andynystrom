import Link from 'next/link'


export default function MessagePost({ date, image, title }) {
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
      </div>
    )
  }
  
  