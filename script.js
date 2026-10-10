
const followBtn = document.getElementById("followBtn");
const followersEl = document.getElementById("followers");
const likeBtn = document.getElementById("likeBtn");

let following = false;
let followers = 312;
let liked = false;

// Follow / Unfollow
followBtn.addEventListener("click", () => {
  following = !following;
  followers += following ? 1 : -1;

  followersEl.textContent = followers;

  followBtn.classList.toggle("following", following);
  followBtn.setAttribute("aria-pressed", String(following));

  if (following) {
    followBtn.innerHTML = `
      <i data-lucide="user-check"></i>
      <span>Following</span>
    `;
  } else {
    followBtn.innerHTML = `
      <i data-lucide="user-round-plus"></i>
      <span>Follow</span>
      <span class="plus">+</span>
    `;
  }

  lucide.createIcons();
});

// Like / Unlike
likeBtn.addEventListener("click", () => {
  liked = !liked;

  likeBtn.classList.toggle("liked", liked);
  likeBtn.setAttribute("aria-pressed", String(liked));

  likeBtn.setAttribute(
    "aria-label",
    liked ? "Unlike profile" : "Like profile"
  );
});

// Initialize icons
lucide.createIcons();
