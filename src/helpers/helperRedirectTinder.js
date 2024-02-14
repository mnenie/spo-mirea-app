export default function helperRedirectTinder(){
  const redirect = () => {
    const url = 'https://policies.tinder.com/community-guidelines/intl/ru/?lang=ru'
    window.open(url, '_blank')
  }
  return {
    redirect
  }
}