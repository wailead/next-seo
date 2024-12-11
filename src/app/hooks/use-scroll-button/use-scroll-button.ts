//하단으로 스크롤 이동
const useScrollButton = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  })
}

export default useScrollButton
