const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
  let uri = 'http://localhost:3000/posts?_sort=nama&_oder=asc';
  if (term) {
    uri += `&q=${term}`;
  }

  const res = await fetch(uri);
  const posts = await res.json();

  let template = '';
  posts.forEach(post => {
    template += `
      <div class="post">
        <p>${post.nim}</p>  
        <h3>${post.nama}</h3>  
        <p>${post.alamat.slice(0, 200)}...</p>
        <a href="details.html?id=${post.id}">Read more ... </a>
      </div>
    `
  })
  container.innerHTML = template;
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());