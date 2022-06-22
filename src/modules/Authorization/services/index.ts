import api from "@/apiConfig";

export abstract class authorizationService {
  static authorization(id: string): Promise<any> {
    return api
      .get<any>("test_auth", {
        headers: {
          "Content-type": "application/json",
          "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
          "Leadhit-Site-Id": id
        }
      })
      .then((resp) => {
        return resp.data;
      });
  }
}
