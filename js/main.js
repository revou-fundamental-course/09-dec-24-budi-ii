let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }



const username = document.getElementById('username')
const email = document.getElementById('email')
const form = document.getElementById('form')
const name_error = document.getElementById('name_error')

form.addEventListener('submit', (e) => {

  
  if (username.value.length <= 6) {
    e.preventDefault();
    name_error.innerHTML = "Nama kurang";
  }
  
 

  
})