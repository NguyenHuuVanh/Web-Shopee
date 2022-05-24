const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const pageList = $("catelory__panigation-page");
const pageListItem = pageList.children;

for (let i = 0; i < pageListItem.length; i++) {
    console.log(pageListItem[i]);
}