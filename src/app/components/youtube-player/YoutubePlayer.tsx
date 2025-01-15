interface Props {
  data: string
  className?: string
}
function YoutubePlayer({ data, className }: Props) {
  return <object type="text/html" data={data} className={className}></object>
}

export default YoutubePlayer
