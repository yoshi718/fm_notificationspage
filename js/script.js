import { createArray } from "./array.js";
const notificationArray = createArray();

/********************************************************  Markup */

const markAll = document.querySelector(".mark-all");
const notifications = document.querySelector(".notifications");
const numberOfNotices = document.querySelector(".notices");

/* notificationArray is stored in another files (array.js) */
document.addEventListener("DOMContentLoaded", function () {
  let unreadNotices = 0;

  notificationArray.forEach((q) => {
    notifications.insertAdjacentHTML("beforeend", markup(q));
    if (q.unread) unreadNotices++;
  });

  numberOfNotices.textContent = unreadNotices;
});

markAll.addEventListener("click", function () {
  const unread = document.querySelectorAll(".unread");
  unread.forEach((e) => e.classList.remove("show"));
  numberOfNotices.textContent = "0";
});

const markup = function (n) {
  if (!n.name) return ``;

  const name = `<a href='#' class='name'>${n.name}</a>`;

  const image = n.posterImage
    ? `<img src='${n.posterImage}' alt='poster image' />`
    : ``;
  const action = n.action ? `<span class='action'>${n.action}</span>` : ``;
  const group = n.group ? `<a href="#" class='group'>${n.group}</a>` : ``;
  const unread = n.unread ? `show` : ``;
  const message = n.message ? `<p>${n.message}</p>` : ``;
  const picture = n.picture
    ? `<div class="notification-picture">
          <a href="#">
            <img src='${n.picture}' alt='' />
          </a>
       </div>`
    : ``;

  return `
    <div class='notification'>
      <div class='notification-image'>
        ${image}
      </div>
      <div class='notification-main'>
        <div class='text'>
          ${name}
          ${action}
          ${group}
          <span class='unread ${unread}'></span>
        </div>
        <span class='time'>${n.time}</span>
        ${message}
      </div>
      ${picture}
    </div>
  `;
};
