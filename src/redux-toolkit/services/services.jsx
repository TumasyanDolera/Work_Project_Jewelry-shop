export const getIds = async (token, page) => {
  try {
    const response = await fetch('https://api.valantis.store:41000/', {
      method: 'POST',
      headers: {
        'X-Auth': token,
        'Content-type': 'Application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        action: 'get_ids',
        params: { offset: (page - 1) * 50, limit: 50 },
      }),
    });

    const data = await response.json();
    return data.result;

  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getItems = async (token, ids) => {
  try {
    if (ids.length) {

      const uniqueIds = Array.from(new Set(ids));

      const response = await fetch('https://api.valantis.store:41000/', {
        method: 'POST',
        headers: {
          'X-Auth': token,
          'Content-type': 'Application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({
          action: 'get_items',
          params: { ids: uniqueIds },
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.error(`API Error: ${data.error}`);
        return [];
      }

      const uniqueItems = [];
      const seenIds = new Set();

      for (const item of data.result) {
        if (!seenIds.has(item.id)) {
          uniqueItems.push(item);
          seenIds.add(item.id);
        }
      }

      return uniqueItems;

    }

    return [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};


