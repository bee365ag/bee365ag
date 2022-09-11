$(document).ready(function () {
  // disable html elements when included from external handler
  if (window.self !== window.top) {
    const mainNavBar = document.getElementById('main-header');
    const docsNav = document.getElementsByClassName('bee-layout-docs-nav')[0];
    const docs = document.getElementsByClassName('bee-layout-docs')[0];
    
    mainNavBar.style.display = 'none';
    docsNav.style.display = 'none';
    docs.style.display = 'inherit'
    
    console.log('embedded mode active');
  }
});
