function UrlPreview({ value }) {
  function urlize(str) {
    return str.trim().replace(/[^\w\s-]/g, '').replace(/\s/g, '-').toLowerCase()
  }

  return (
    value ? <div>Your URL will be: <strong>articles.alpha.canada.ca/{urlize(value)}</strong></div> : <div>Enter a title to preview your URL</div>
    
  );
}


export default UrlPreview;
