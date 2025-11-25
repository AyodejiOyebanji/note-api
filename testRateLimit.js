const axios = require("axios");

(async () => {
  for (let i = 1; i <= 101; i++) {
    try {
      const res = await axios.get("http://localhost:5000/api/notes");
      console.log(i, res.status);
    } catch (err) {
      console.log(i, err.response.status, err.response.data);
    }
  }
})();
