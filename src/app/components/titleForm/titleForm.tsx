interface titleFormProps {
  subtitle: string
  title: string
}

function TitleForm({ subtitle, title }: titleFormProps) {
  return (
    <div className="flex flex-col gap-[6.24px]">
      <p className="font-montserrat font-normal text-[14.56px] text-primary-default">{subtitle}</p>
      <p className="font-pretendard font-bold text-[24.96px] text-gray-600">{title}</p>
    </div>
  )
}

export default TitleForm
