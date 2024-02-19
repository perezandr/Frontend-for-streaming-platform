const httpGet = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  });

  const data = await res.json();

  return data;
};

const BASE_URL = "https://api.themoviedb.org/3";
const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWIwYTg0ZTNkNTZlMDQ4NGMyNGY0NWYwMWIwNGY2MiIsInN1YiI6IjY1NmM4YWRkODgwNTUxMDEwMDBlMGQ0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IWZ1H6v_Aao2vSdpBi6CqJ4ksjytfD79rfmPTg5inBI";

export { httpGet };

// httpGet è una funzione asincrona che fa una richiesta HTTP GET
// ad un endpoint utilizzando una fetch API.
//Sono aggiunti i necessari headers e il codice di autorizzazione 'AUTH'.
//Successivamente traduce la risposta come JSON.
//La funzione ritorna i dati richiesti.
