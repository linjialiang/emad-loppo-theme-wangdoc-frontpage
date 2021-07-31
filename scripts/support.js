function showSupBanner() {
  // 重要！
  // 每次更新此脚本，可以打开或关闭下面这行注释，使得脚本长度发生变化
  // console.log();

  // 2021年2月18日
  var deadline = new Date(2021, 1, 18);
  if (deadline - (new Date()) < 0) return;

  // scope check
  var scope = 'all';
  var currentScope = window.location.pathname.split('/')[1];
  if (scope !== 'all' && !scope.includes(currentScope)) return;

  // page path check
  if (typeof EMAD_LOPPO === 'undefined') return;
  if (!EMAD_LOPPO.current_path || EMAD_LOPPO.current_path.substr(-1) === '/') return;

  // create banner node
  var bannerDiv = document.createElement('div');
  var bannerP = document.createElement('p');
  bannerDiv.appendChild(bannerP);

  var styleStr = [
    'margin: 2rem 0',
    'padding: 1em',
    'background-color: #c4e0e1',
    'border-radius: 5px',
    'font-size: 90%',
    'color: #333333'
  ].join(';');

  bannerP.style = styleStr;
  bannerP.innerHTML = '';

  // insert into page
  var metaNode = document.querySelector('.page-meta');
  if (!metaNode) return;
  metaNode.parentElement.insertBefore(bannerDiv, metaNode.nextSibling);

  // console.log('loaded');
}

showSupBanner();
