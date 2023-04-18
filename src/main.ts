import { configRoutes, defaultConfig } from './config';


window.onload = function () {
  const currentRoute = window.location.pathname;

  const config = configRoutes.get(currentRoute);
  updateBtnGroups(config || defaultConfig);
};

const createAtags = (label: string, attrs: Record<string, any>) => {
  const a = document.createElement('a');
  Object.entries(attrs).forEach(([attr, value]) => a.setAttribute(attr, value));
  a.textContent = label;
  a.classList.add('button');
  a.rel = 'noopenner noreferrer nofollow';
  a.title = label;
  return a;
};
function updateBtnGroups(config: IRoutes) {
  const groups = document.querySelector('#btn-group');
  if (groups) {
    groups.innerHTML = '';
    setTimeout(() => {
      config.options
        .map((ele) => createAtags(ele.name, { href: ele.url }))
        .forEach((a) => groups.appendChild(a));
    });
  }
  document.querySelector('.title')!.textContent = config.title;
  document.querySelector('.sub-title')!.textContent = config.subTitle;
}
