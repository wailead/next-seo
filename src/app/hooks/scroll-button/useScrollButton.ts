//하단으로 스크롤 이동
export const useScrollButton = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  })
}
