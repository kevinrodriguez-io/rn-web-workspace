import { loadAsync } from 'expo-font'
import { useEffect, useState } from 'react'

const useLoadFonts = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        await loadAsync({
          'OpenSans-Light': require('../../assets/fonts/OpenSans-Light.ttf'),
          'OpenSans-LightItalic': require('../../assets/fonts/OpenSans-LightItalic.ttf'),
          'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
          'OpenSans-Italic': require('../../assets/fonts/OpenSans-Italic.ttf'),
          'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
          'OpenSans-SemiBoldItalic': require('../../assets/fonts/OpenSans-SemiBoldItalic.ttf'),
          'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
          'OpenSans-BoldItalic': require('../../assets/fonts/OpenSans-BoldItalic.ttf'),
          'OpenSans-ExtraBold': require('../../assets/fonts/OpenSans-ExtraBold.ttf'),
          'OpenSans-ExtraBoldItalic': require('../../assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
        })
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [setLoading, setError])
  return [loading, error]
}

export default useLoadFonts
