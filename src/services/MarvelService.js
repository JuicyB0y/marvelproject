import { useHttp } from "../hooks/useHttp";


const MarvelService = () => {
   const {loading, error, request, clearError, process, setProcess} = useHttp();

   const _apiKey = 'apikey=c8b9ae3cc6b557e536059dc1afa83680';
   const _apiBase = 'https://gateway.marvel.com:443/v1/public/characters';

   const getAllCharacters = async() => {
      const res = await request(`${_apiBase}?limit=9&offset=210&${_apiKey}`)
      return res.map(_transformCharacter);
   };


   const getCharacter = async (id) => {
      const res = await request(`${_apiBase}/${id}?${_apiKey}`);
      return _transformCharacter(res);
   }

   const _transformCharacter = (res) => {
      return {
         id: res.data.results[0].id,
         name: res.data.results[0].name,
         description: res.data.results[0].description,
         thumbnail: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
         homepage: res.data.results[0].urls[1].url,
         wiki:res.data.results[0].urls[1].url,
         comics:res.data.results[0].comics.item
      }
   }
   return {loading, error, getAllCharacters, getCharacter, clearError, process, setProcess};
}
export default MarvelService;
