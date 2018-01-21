Vue.component('post', {
  template: "#post-template",
  props: ['post'],
  data: function () {
    return {
      upvoted: false,
      downvoted: false
    };
  },
  methods: {
    upvote: function () {
      this.upvoted = !this.upvoted;
      this.downvoted = false;
    },
    downvote: function () {
      this.downvoted = !this.downvoted;
      this.upvoted = false;
    }
  },
  computed: {
    votes: function () {
      if (this.upvoted) {
        return this.post.votes + 1;
      } else if (this.downvoted) {
        return this.post.votes - 1;
      } else {
        return this.post.votes;
      }
    }
  }
});


var vm = new Vue({
  el: "#app",
  data: {
    posts: [{
              title: "First post",
              description: "This is my first post to using Vue js, Post for my demo vue js starting at 15 votes",
              votes: 15
          },
          {
              title: "Upvote",
              description: "Try out the upvoting, it works, I promise",
              votes: 53
          },
          {
              title: "coligo is the bomb!",
              description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
              votes: 10
          }],
          post: "",
          description: ""
        },

        methods: {
    NewPost: function() {
      this.posts.push({
        title: this.post,
        description: this.description,
        votes: 0
      })
      this.post = "";
      this.description = "";
    }
  }
      });