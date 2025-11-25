function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject("Failed to fetch");
      else resolve({ id, name: "User " + id });
    }, 300);
  });
}

async function fetchUsersWithRetry(ids) {
  const fetchWithRetry = async (id) => {
    try {
      return await fetchUserData(id);
    } catch (err) {
      try {
        return await fetchUserData(id);
      } catch (err) {
        return null; 
      }
    }
  };

  const promises = ids.map(fetchWithRetry);
  const results = await Promise.all(promises);
  return results.filter(Boolean);
}

(async () => {
  const userIds = [1, 2, 3, 4, 5];
  const users = await fetchUsersWithRetry(userIds);
  console.log(users);
})();
