function usePhoneCheck() {
  const phone_regex = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/
  const checkPhone = (phone_number: string) => {
    if (!phone_regex.test(phone_number)) return false
    else return true
  }
  return { checkPhone }
}

export default usePhoneCheck
