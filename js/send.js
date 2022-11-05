fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if(response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  });
