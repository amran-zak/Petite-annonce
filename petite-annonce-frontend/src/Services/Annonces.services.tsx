import api from "../server";
import AnnonceData from '../Types/Annones.types'

class AnnoncesService {
  findAll() {
    return api.get<any>("/publication");
    
  }

  createAnnonce(data : AnnonceData) {
    const token = JSON.parse(localStorage.getItem("user") || '{}');
    return api.post<Array<AnnonceData>>("/publication/create", data, {
      headers: {
        'Authorization': `Bearer ${token.acces_token}`
      },});
  }

}

export default new AnnoncesService();