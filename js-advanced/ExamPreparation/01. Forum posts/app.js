window.addEventListener('load', solve);

function solve() {
    let publishBtn = document.getElementById('publish-btn');
    let reviewListEl = document.getElementById('review-list');
    let postTitleEl = document.getElementById('post-title');
    let postCategoryEl = document.getElementById('post-category');
    let postContentEl = document.getElementById('post-content');

    publishBtn.addEventListener('click', publishHandler);

    function publishHandler(e) {
        let postTitle = postTitleEl.value;
        let postCategory = postCategoryEl.value;
        let postContent = postContentEl.value;

        if (postTitle === '' || postCategory === '' || postContent === '')
            return;

        let post = createPost(postTitle, postCategory, postContent);
        reviewListEl.appendChild(post);

        postTitleEl.value = '';
        postCategoryEl.value = '';
        postContent.value = '';
    }

    function editHandler(e) {
        let li = e.target.parentElement;
        console.log(li);
    }

    function createPost(postTitle, postCategory, postContent) {
        let li = document.createElement('li');
        li.classList.add('rpost');
        li.innerHTML = `
            <article>
              <h4>${postTitle}</h4>
              <p>Category: ${postCategory}</p>
              <p>Content: ${postContent}</p>
            </article>
            <button onclick="editHandler()" class="action-btn edit">Edit</button>
            <button class="action-btn approve">Approve</button>
            `;

        return li;
    }
}
