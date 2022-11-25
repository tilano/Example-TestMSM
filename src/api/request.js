export const Request = {
  async Api(params) {
    return  fetch(`https://6222994f666291106a29f999.mockapi.io/${params.url}`)
    .then((response) => response.json())
    .then((data) => {return data});
  },
};