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

export const getMonthImages = async() => {
  
}
