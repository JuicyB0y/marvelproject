const useHttp = () => {
   const request = async (url, {method = "POST", body = null, headers = {'Content-type': 'Applicstion/json'}}) => {
      const response = await request.fetch(url);
      
      if (response.!ok) {
         return `url: ${url} is unavalible`
      }
   }
}