const apiKey = process.env.VUE_APP_API_KEY;
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key="

export const getDailyImage = async() => {
  const response = await fetch(`${baseUrl}${apiKey}`)
  if (!response.ok) {
    throw Error('Unable to get today\'s image. Try again later')
  }
  const dailyImage = await response.json();
  return dailyImage;
}

export const getMonthImages = async(today) => {
  const endDay = today.split('-')[2]
  const month = today.split('-')[1]
  const year = today.split('-')[0]
  const response = await fetch(`${baseUrl}${apiKey}&start_date=${year}-${month}-01`)
    if (!response.ok) {
      throw Error('Unable to get this month\'s images. Try again later.')
    }  
  const monthImages = await response.json()
  return monthImages;
}
