const cheerio = require('cheerio');
const axios = require('axios');

axios.get('https://buttercms.com/docs/api/').then((response) => {
  const $ = cheerio.load(response.data)

  const urlElems = $('pre.highlight.shell');

  for (let i = 0; i < urlElems.length; i++) {
    const urlSpan = $(urlElems[i]).find('span.s1')[0]

    if (urlSpan) {
      const urlText = $(urlSpan).text();

      console.log(urlText);
    }
  }
})