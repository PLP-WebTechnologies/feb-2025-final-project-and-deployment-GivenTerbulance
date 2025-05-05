const posts = {
  1: {
    title: "Understanding Python for Beginners",
    content: `<p>Python is a versatile, beginner-friendly programming language used in web development, data science, AI, and more.</p>`
  },
  2: {
    title: "How AI is Changing the World",
    content: `<p>Artificial Intelligence (AI) is revolutionizing industries by automating tasks, enhancing decision-making, and powering innovation.</p>`
  },
  3: {
    title: "Introduction to IoT Devices",
    content: `<p>The Internet of Things (IoT) connects everyday devices to the internet, allowing for smart homes, cities, and industries.</p>`
  }
};

const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

if (postId && posts[postId]) {
  document.getElementById("post-title").innerText = posts[postId].title;
  document.getElementById("post-content").innerHTML = posts[postId].content;
}
