import api from "../server";
import AnnonceData from '../Types/Annones.types'

class AnnoncesService {
  findAll() {
    return api.get<any>("/publication");
    
  }

  findByID(id : string | undefined) {
    return api.get<any>("/publication/" + id);
    
  }
  createAnnonce(data : AnnonceData) {
    const token = JSON.parse(localStorage.getItem("user") || '{}');
    return api.post<Array<AnnonceData>>("/publication/create", data, {
      headers: {
        'Authorization': `Bearer ${token.acces_token}`
      },});
  }

  findAllMe() {
    const token = JSON.parse(localStorage.getItem("user") || '{}');
    return api.get<Array<AnnonceData>>("/publication/me", {
      headers: {
        'Authorization': `Bearer ${token.acces_token}`
      },});
  }

}

export default new AnnoncesService();